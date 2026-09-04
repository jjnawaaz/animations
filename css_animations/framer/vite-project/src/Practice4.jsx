// Animate Presence

import { AnimatePresence, motion } from "motion/react";
import "./Practice3.css";
import { useState } from "react";

const Practice4 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const variants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <>
      <button onClick={() => setIsVisible((prev) => !prev)}>Toggle</button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.6 }}
            className="box"
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Practice4;
