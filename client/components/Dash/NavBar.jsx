import React from "react";
import '../../stylesheets/dashboard.css';
import '../../assets/logo.png'; 
import { useNavigate } from "react-router-dom"

const NavBar = () => {
  const navigate = useNavigate(); 

  const handleClick = (route) => {
    navigate(route);
  }
  
  return (
    <div className="navbar">
      <div className="navbox">
        <ul className="navlist">
          <img src="logo.png" id="pagelogo" ></img> 
          <li className="dashnav" onClick={() => handleClick('/dashboard')}>Dashboard</li>
          <li className="teamnav" onClick={() => handleClick('/dashboard')}>Team</li>
          <li className="settingnav" onClick={() => handleClick('/dashboard')}>Settings</li>
          <li className="logoutnav" onClick={() => handleClick('/dashboard')}>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar