import "./tabbar.css";
import { FaHome, FaPlus, FaCog } from "react-icons/fa";

function Tabbar() {
  return (
    <>
      <div className="tabbar">
        <a href="/">
          <FaHome />
        </a>
        <a href="/">
          <FaPlus />
        </a>
        <a href="/">
          <FaCog />
        </a>
      </div>
    </>
  );
}

export default Tabbar;
