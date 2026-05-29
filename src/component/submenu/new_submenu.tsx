import { motion } from "framer-motion";
import "./new_submenu.css";
import { Link } from "react-router-dom";

function New_Submenu() {
  return (
    <>
      <motion.div
        style={{ left: "50%", x: "-50%" }}
        className="list"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
      >
        <Link to={"/add_task"}>Create new Task</Link>
        <hr />
        <Link to={"/add_bucket"}>Create new Bucket</Link>
      </motion.div>
    </>
  );
}

export default New_Submenu;
