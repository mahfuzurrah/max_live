import React, { useState } from "react";
import { FaUser, FaUserCog } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";


import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import "./layout.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      label: "Dashboard",
      icon: <MdSpaceDashboard className="icons" />,
      isActive: true,
      route: "/dashboard",
    },
    {
      id: 2,
      label: "Datasets",
      icon: <FaClipboardList className="icons" />,
      isActive: false,
      route: "/datasets",
    },
    {
      id: 3,
      label: "Models",
      icon: <FaUserCog className="icons" />,
      isActive: false,
      route: "/models",
    },
    {
      id: 4,
      label: "Wallet",
      icon: <FaUser className="icons" />,
      isActive: false,
      route: "/wallet",
    },
  ]);

  const setActiveItem = (id) => {
    const updatedItems = menuItems.map((item) => ({
      ...item,
      isActive: item.id === id,
    }));
    setMenuItems(updatedItems);

    // Close sidebar on mobile and add 'sider-collapsed' class
    if (window.innerWidth <= 991) {
      toggleSidebar();
    }
  };

  return (
    <div className={`side_navbar ${isOpen ? "" : "sider-collapsed"}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="side_nav_menu">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`side_nav_list ${item.isActive ? "active" : ""}`}
            onClick={() => setActiveItem(item.id)}
          >
            <Link to={item.route} className="nav-link">
              <div className="icon">{item.icon}</div>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
