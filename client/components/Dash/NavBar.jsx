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
          {/* <li className="dashnav"><a href="/dashboard">Dashboard</a></li>
          <li className="teamnav"><a href="/dashboard">Team</a></li>
          <li className="settingnav"><a href="/dashboard">Settings</a></li>
          <li className="logoutnav"><a href="/login">Logout</a></li> */}
          <li className="dashnav" onClick={navigate("/dashboard")}>Dashboard</li>
          <li className="teamnav" onClick={navigate("/dashboard")}>Team</li>
          <li className="settingnav" onClick={navigate("/dashboard")}>Settings</li>
          <li className="logoutnav" onClick={navigate("/login")}>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar