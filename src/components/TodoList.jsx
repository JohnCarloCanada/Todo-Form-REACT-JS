import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Reorder } from "framer-motion";
import { TodoListItem } from "../components";
import { FramerMotionDragAndDeleteAnimation } from "../components/ComponentsAnimation";

const TodoList = ({ todos, setFilter }) => {
  const { setTodos } = useContext(DataContext);
  return (
    <>
      <form
        className="w-full h-[350px] overflow-y-auto bg-slate-200 p-3 mt-3 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="mt-3 text-2xl sm:text-3xl">TODO LIST</h2>
        <label className="text-xl font-bold mr-3" htmlFor="categories">
          Choose a category:
        </label>
        <select
          className="font-bold w-44 h-10 border-none outline-none rounded-md "
          id="categories"
          onChange={(e) => setFilter(e.target.value)}
        >
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
        <FramerMotionDragAndDeleteAnimation>
          {todos.map((todo) => (
            <Reorder.Item key={todo.id} value={todo}>
              <TodoListItem todo={todo} />
            </Reorder.Item>
          ))}
        </FramerMotionDragAndDeleteAnimation>
      </form>
    </>
  );
};

export default TodoList;
