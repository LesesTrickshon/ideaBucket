import "./tabbar.css";
import { FaHome, FaPlus, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

function Tabbar() {
  return (
    <>
      <div className="tabbar">
        <Link to={"/"}>
          <FaHome />
        </Link>
        <Link to={"/"}>
          <FaPlus />
        </Link>
        <Link to={"/"}>
          <FaCog />
        </Link>
      </div>
    </>
  );
}

export default Tabbar;
