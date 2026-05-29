import "./add_task.css";
import Tabbar from "../../component/tabbar/tabbar";
import { motion } from "framer-motion";

function Add_Task() {
  return (
    <>
      <Tabbar />
      <h1>addTask</h1>
      <section className="main">
        <h2>Task Options</h2>
        <input type="text" placeholder="Task Name..." />
        <textarea
          name="Description"
          placeholder="Description..."
          id=""
          rows={5}
        ></textarea>

        <hr />
        <h2>Bucket Options</h2>
        <input type="text" placeholder=" Bucket Name..." />

        <hr />
        <h2>Expiration Options</h2>
        <div className="horizontal">
          <input type="checkbox" />
          <p style={{ fontSize: "12px" }}>Add expiration date</p>
        </div>
        <input type="date" />

        <hr />
        <h2>Time Span</h2>
        <div className="horizontal" style={{ margin: "0 auto" }}>
          <input type="number" className="timespan" placeholder="hours" />
          <p>:</p>
          <input type="number" className="timespan" placeholder="min" />
        </div>

        <hr />
        <motion.button className="submit-button" whileTap={{ scale: 0.9 }}>
          Add
        </motion.button>
      </section>

      <div style={{ height: "100px" }}></div>
    </>
  );
}

export default Add_Task;
