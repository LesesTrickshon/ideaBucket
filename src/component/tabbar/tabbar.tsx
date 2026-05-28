import "./tabbar.css";
import New_Submenu from "../submenu/new_submenu";
import { useState } from "react";
import { FaHome, FaPlus, FaCog } from "react-icons/fa";
import { FaBucket } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Tabbar() {
  const [showSubmenu, setShowSubmenu] = useState(false);
  return (
    <>
      {showSubmenu && (
        <div className="submenuWrapper">
          <New_Submenu />
        </div>
      )}

      <div className="tabbar">
        <Link to={"/"}>
          <FaHome />
        </Link>
        <button
          onClick={() => {
            setShowSubmenu(!showSubmenu);
          }}
          className="tabbar-button"
        >
          <FaPlus />
        </button>
        <Link to={"/buckets"}>
          <FaBucket />
        </Link>
        <Link to={"/settings"}>
          <FaCog />
        </Link>
      </div>
    </>
  );
}

export default Tabbar;
