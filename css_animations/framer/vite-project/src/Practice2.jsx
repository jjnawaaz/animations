// Variants

import { motion } from "motion/react";
import "./Practice2.css";
const Practice2 = () => {
  const variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="box"
    ></motion.div>
  );
};

export default Practice2;
