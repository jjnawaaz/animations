// Animate Presence

import { motion } from "motion/react";
import "./Practice5.css";
import { useState } from "react";

const Practice5 = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <motion.div
        layout
        className={expanded ? "expanded" : "box"}
        onClick={() => setExpanded((prev) => !prev)}
      ></motion.div>
    </>
  );
};

export default Practice5;
