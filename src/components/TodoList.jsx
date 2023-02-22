import React from "react";
import TodoListItem from "./TodoListItem";
import { motion, AnimatePresence } from "framer-motion";

const TodoList = ({ todos, setFilter, handleCheck, handleDelete, modalOpen, setModalOpen, handleEdit }) => {
  return (
    <>
      <form className="w-full min-h-[350px]  bg-slate-200 p-3 mt-3 rounded-md" onSubmit={(e) => e.preventDefault()}>
        <h2 className="mt-3 text-2xl sm:text-3xl">TODO LIST</h2>
        <label className="text-xl font-bold mr-3" htmlFor="categories">
          Choose a category:
        </label>
        <select className="font-bold w-44 h-10 border-none outline-none rounded-md " id="categories" onChange={(e) => setFilter(e.target.value)}>
          <option className="font-semibold" value="all">
            all
          </option>
          <option className="font-semibold" value="business">
            business
          </option>
          <option className="font-semibold" value="personal">
            personal
          </option>
        </select>

        <motion.section layout>
          <AnimatePresence>
            {todos.map((todo) => (
              <TodoListItem
                key={todo.id}
                todo={todo}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                handleEdit={handleEdit}
              />
            ))}
          </AnimatePresence>
        </motion.section>
      </form>
    </>
  );
};

export default TodoList;
