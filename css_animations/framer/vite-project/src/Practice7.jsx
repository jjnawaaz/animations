import { animate, motion, useMotionValue } from "motion/react";
import "./Practice7.css";
import { useState } from "react";

const Practice7 = () => {
  const [clicked, setClicked] = useState(false);
  const x = useMotionValue(0);
  return (
    <>
      <button
        onClick={() => {
          setClicked((prev) => !prev);
          if (clicked) {
            // x.set(200);
            animate(x, 200, {
              duration: 0.6,
              type: "spring",
              stiffness: 500,
              damping: 10,
            });
          } else {
            // x.set(0);
            animate(x, 0, {
              duration: 0.6,
              type: "spring",
              stiffness: 500,
              damping: 10,
            });
          }
        }}
      >
        Move
      </button>
      <motion.div
        style={{ x }}
        transition={{ duration: 0.6 }}
        className="box"
      ></motion.div>
    </>
  );
};

export default Practice7;
