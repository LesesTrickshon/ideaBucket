import Tabbar from "../../component/tabbar/tabbar";
import "./add_bucket.css";
import { useState } from "react";
import { motion } from "framer-motion";

function Add_Bucket() {
  const [color, setColor] = useState("#c084fc");
  return (
    <>
      <h1>addBucket</h1>
      <Tabbar />
      <section className="main">
        <h2>Bucket Options</h2>
        <input type="text" placeholder="Bucket Name" />
        <div className="horizontal">
          <input
            type="color"
            value={color}
            onChange={(change) => {
              setColor(change.target.value);
            }}
          />
          <p>Bucket Color</p>
        </div>
        <div className="horizontal">
          <input type="checkbox" />
          <p>Display and Pinned</p>
        </div>

        <hr />
        <h2>Shared Bucket</h2>
        <div className="horizontal">
          <input type="checkbox" />
          <p>Enable Shared Bucket</p>
        </div>
        <input type="text" placeholder="Server address..." />
        <input type="text" placeholder="Port..." />
        <div className="horizontal">
          <input type="checkbox" />
          <p>Enable Password</p>
        </div>
        <input type="password" placeholder="Password..." />

        <hr />
        <motion.button className="submit-button" whileTap={{ scale: 0.9 }}>
          Add
        </motion.button>
      </section>
      <div style={{ height: "100px" }}></div>
    </>
  );
}

export default Add_Bucket;
