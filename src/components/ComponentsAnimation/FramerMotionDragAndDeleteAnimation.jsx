import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import { motion, AnimatePresence, Reorder } from "framer-motion";

const FramerMotionDragAndDeleteAnimation = ({ children }) => {
  const { todos, setTodos } = useContext(DataContext);

  return (
    <Reorder.Group axis="y" values={todos} onReorder={setTodos}>
      <motion.section layout>
        <AnimatePresence>{children}</AnimatePresence>
      </motion.section>
    </Reorder.Group>
  );
};

export default FramerMotionDragAndDeleteAnimation;
