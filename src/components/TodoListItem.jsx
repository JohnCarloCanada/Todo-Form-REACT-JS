import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import { motion } from "framer-motion";

const TodoListItem = ({ todo }) => {
  const { todos, setTodos, setEditID, setModalOpen, modalOpen } = useContext(DataContext);

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

  return (
    <motion.section
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.5 }}
      exit={{ opacity: 0, scale: 0.5 }}
      layout
      className="mt-4 w-full flex items-center bg-white rounded-sm px-2 gap-x-3"
    >
      <input className="w-10 h-10 cursor-pointer peer" type="checkbox" checked={todo.completed} onChange={() => handleCheck(todo.id)} />
      <input
        className="w-full h-10 border-none outline-none font-semibold text-sm sm:text-xl peer-checked:line-through"
        type="text"
        value={todo.todo}
        readOnly
      />
      <section className="flex gap-x-2 items-center">
        <button
          className="py-1 px-2 bg-green-600 rounded-sm font-semibold text-white hover:bg-green-900 duration-500 ease"
          type="button"
          onClick={() => handleEdit(todo.id)}
        >
          EDIT
        </button>
        <button
          className="py-1 px-2 bg-red-600 rounded-sm font-semibold text-white hover:bg-red-900 duration-500 ease"
          type="button"
          onClick={() => handleDelete(todo.id)}
        >
          DELETE
        </button>
      </section>
    </motion.section>
  );
};

export default TodoListItem;
