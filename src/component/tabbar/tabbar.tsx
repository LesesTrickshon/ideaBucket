import "./tabbar.css";
import New_Submenu from "../submenu/new_submenu";
import { useState, useRef, useEffect } from "react";
import { FaHome, FaPlus, FaCog } from "react-icons/fa";
import { FaBucket } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Tabbar() {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const submenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (submenuRef.current && !submenuRef.current.contains(e.target)) {
        setShowSubmenu(false);
      }
    }

    if (showSubmenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => removeEventListener("mousedown", handleClickOutside);
  }, [showSubmenu]);

  return (
    <>
      <AnimatePresence>
        {showSubmenu && (
          <div className="submenuWrapper" ref={submenuRef}>
            <New_Submenu />
          </div>
        )}
      </AnimatePresence>

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
