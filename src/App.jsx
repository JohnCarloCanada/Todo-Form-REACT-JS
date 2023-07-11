import { useContext } from "react";
import DataContext from "./context/DataContext";
import { TodoEditModal, TodoHeader, TodoInput, TodoList } from "./components";

function App() {
  const { modalOpen, todos, filter, setFilter } = useContext(DataContext);

  return (
    <main className="w-full min-h-screen bg-cyan-200 dark:bg-zinc-900 duration-500 ease py-2 px-4 pb-5">
      <TodoHeader />
      <TodoInput />
      <TodoList
        todos={todos.filter((todo) =>
          filter === "all"
            ? todo
            : todo.category.toLowerCase().includes(filter.toLowerCase())
        )}
        setFilter={setFilter}
      />
      {modalOpen && <TodoEditModal />}
    </main>
  );
}

export default App;
