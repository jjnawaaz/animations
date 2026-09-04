import { motion } from "motion/react";
import "./Practice6.css";
import { useState } from "react";
const Practice6 = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      {!expanded && (
        <motion.div
          layoutId="card"
          className="box"
          onClick={() => setExpanded((prev) => !prev)}
        ></motion.div>
      )}
      {expanded && (
        <motion.div
          layoutId="card"
          className="expanded"
          onClick={() => setExpanded((prev) => !prev)}
        ></motion.div>
      )}
    </>
  );
};

export default Practice6;
