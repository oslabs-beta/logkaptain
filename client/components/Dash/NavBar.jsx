import React from "react";
import '../../stylesheets/dashboard.css';
import '../../assets/logo.png'; 
import { useNavigate } from "react-router-dom"

const NavBar = () => {
  const navigate = useNavigate(); 
  
  return (
    <div className="navbar">
      <div className="navbox">
        <ul className="navlist">
          <img src="logo.png" id="pagelogo" ></img> 
          <li className="dashnav"><a href={navigate("/dashboard")}>Dashboard</a></li>
          <li className="teamnav"><a href={navigate("/dashboard")}>Team</a></li>
          <li className="settingnav"><a href={navigate("/dashboard")}>Settings</a></li>
          <li className="logoutnav"><a href={navigate("/login")}>Logout</a></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar