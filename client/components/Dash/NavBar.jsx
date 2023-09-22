import React from "react";
import '../../stylesheets/dashboard.css';
import '../../assets/logo.png'; 

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbox">

        <ul className="navlist">
          <img src="../../assets/logo.png" id="pagelogo" ></img> 
          <li className="dashnav"><a href="/dashboard">Dashboard</a></li>
          <li className="teamnav"><a href="/dashboard">Team</a></li>
          <li className="settingnav"><a href="/dashboard">Settings</a></li>
          <li className="logoutnav"><a href="/login">Logout</a></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar