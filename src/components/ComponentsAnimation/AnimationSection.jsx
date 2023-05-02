import React from "react";
import { todoSection } from "../../Util";
import { motion } from "framer-motion";

const AnimationSection = ({ children }) => {
  const { animate, initial, exit } = todoSection;
  return (
    <motion.section initial={initial} animate={animate} exit={exit} layout className="mt-4 w-full flex items-center bg-white rounded-sm px-2 gap-x-3">
      {children}
    </motion.section>
  );
};

export default AnimationSection;
