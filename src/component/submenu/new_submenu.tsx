import "./new_submenu.css";
import { Link } from "react-router-dom";

function New_Submenu() {
  return (
    <>
      <div className="list">
        <Link to={"/add_task"}>Create new Task</Link>
        <hr />
        <Link to={"/add_bucket"}>Create new Bucket</Link>
      </div>
    </>
  );
}

export default New_Submenu;
