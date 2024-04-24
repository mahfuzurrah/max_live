import { Dropdown, Menu, Space } from "antd";
import React from "react";
import { FaBars } from "react-icons/fa";
import { PiCaretUpDown } from "react-icons/pi";
import { Link } from "react-router-dom";
import User from "../assets/img/user.png";
import Cpass from "../assets/svg/Change Password.svg";
import logOut from "../assets/svg/Log Out.svg";
import Profile from "../assets/svg/Profile.svg";
import { IoMdNotificationsOutline } from "react-icons/io";


const handleMenuClick = (e) => {
  console.log("click", e);
};

const menuItems = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" icon={<img src={Profile} alt="Profile" />}>
      <Link to="/profile">Profile</Link>
    </Menu.Item>
    <Menu.Item key="2" icon={<img src={Cpass} alt="Change Password" />}>
      <Link to="/change-password">Change Password</Link>
    </Menu.Item>
    <Menu.Item key="3" icon={<img src={logOut} alt="Log Out" />}>
      <Link to="/logout">Log Out</Link>
    </Menu.Item>
  </Menu>
);

function Navbar({ toggleSidebar }) {
  return (
    <nav className="nav">
      <div className="toggle_btn" onClick={toggleSidebar}>
        <FaBars className="icons" />
      </div>
      <div className="page_title mb_hide">
        <h1>Dashboard</h1>
      </div>
      <div className="right_area">
        <div className="notifi">
          <IoMdNotificationsOutline className="icons" />
          <span className="dot"></span>
        </div>
        <Dropdown overlay={menuItems}>
          <Space className="header_dropdown">
            <div className="title">
              <img src={User} alt="User_Img" />
              <p className="name">
                Mahfuzur R. <span>Admin</span>
              </p>
            </div>
            <PiCaretUpDown className="icons" />
          </Space>
        </Dropdown>
      </div>
    </nav>
  );
}

export default Navbar;
