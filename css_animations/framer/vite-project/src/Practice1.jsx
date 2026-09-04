import { motion } from "motion/react";
import "./Practice1.css";
const Practice1 = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="box"
      ></motion.div>
    </>
  );
};

export default Practice1;
