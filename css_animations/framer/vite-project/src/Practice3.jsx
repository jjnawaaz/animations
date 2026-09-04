// Animate Presence

import { AnimatePresence, motion } from "motion/react";

import "./Practice3.css";
import { useState } from "react";

const Practice3 = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <button onClick={() => setIsVisible((prev) => !prev)}>Toggle</button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="box"
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Practice3;
