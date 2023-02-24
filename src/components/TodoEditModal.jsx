import React from "react";

const TodoEditModal = ({ modalOpen, setModalOpen, editTodo, setEditTodo, editID, addEditItem }) => {
  return (
    <section className="w-full">
      <div
        className="fixed flex items-center justify-center w-full min-h-screen top-0 left-0 bg-black/80"
        onClick={(e) => {
          setModalOpen(!modalOpen);
          document.body.style.overflow = "inherit";
          setEditTodo("");
        }}
      ></div>
      <form
        className="fixed w-[70%] z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h3 className="text-center text-white font-bold text-4xl mb-1">EDIT TODO</h3>
        <input
          className="w-full h-10 border-none outline-none rounded-md p-5 font-bold"
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          placeholder="EDIT TODO"
        />
        <button
          className="py-2 px-4 rounded-md text-white bg-gray-600 font-bold w-full mt-2 hover:bg-gray-800"
          type="button"
          onClick={() => addEditItem(editID)}
        >
          submit
        </button>
      </form>
    </section>
  );
};

export default TodoEditModal;
