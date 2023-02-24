import { useState, useEffect } from "react";
import TodoEditModal from "./components/TodoEditModal";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  const [userName, setUserName] = useState(localStorage.getItem("username") || "");
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );

  const [newTodos, setNewTodos] = useState("");
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [editTodo, setEditTodo] = useState("");
  const [editID, setEditID] = useState(null);

  useEffect(() => {
    localStorage.setItem("username", userName);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [userName, todos]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const addTodos = () => {
    if (!newTodos.trim() || newTodos.trim() === " " || !category) return;
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const newTodoItem = { id, todo: newTodos, completed: false, category };
    const newTodoItems = [...todos, newTodoItem];
    setTodos(newTodoItems);
    setNewTodos("");
  };

  const handleCheck = (id) => {
    const newTodoItems = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    setTodos(newTodoItems);
  };

  const handleDelete = (id) => {
    const newTodoItems = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoItems);
  };

  const handleEdit = (id) => {
    setModalOpen(!modalOpen);
    document.body.style.overflow = "hidden";
    setEditID(id);
  };

  const addEditItem = (id) => {
    if (!editTodo.trim() || editTodo.trim() === " ") {
      setModalOpen(!modalOpen);
      document.body.style.overflow = "inherit";
      setEditTodo("");
      return null;
    }
    const newTodoItems = todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo));
    setTodos(newTodoItems);
    setModalOpen(!modalOpen);
    document.body.style.overflow = "inherit";
    setEditTodo("");
  };

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <main className="w-full min-h-screen bg-cyan-200 dark:bg-zinc-900 duration-500 ease py-2 px-4 pb-5">
      <TodoHeader userName={userName} setUserName={setUserName} toggleDarkMode={toggleDarkMode} theme={theme} />
      <TodoInput newTodos={newTodos} setNewTodos={setNewTodos} addTodos={addTodos} setCategory={setCategory} />
      <TodoList
        todos={todos.filter((todo) => (filter === "all" ? todo : todo.category.toLowerCase().includes(filter.toLowerCase())))}
        setFilter={setFilter}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        handleEdit={handleEdit}
      />
      {modalOpen && (
        <TodoEditModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          editID={editID}
          addEditItem={addEditItem}
        />
      )}
    </main>
  );
}

export default App;
