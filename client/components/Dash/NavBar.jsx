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
          <li className="dashnav"><a onClick={() => handleClick('/dashboard')}>Dashboard</a></li>
          <li className="teamnav"><a onClick={() => handleClick('/contact')}>Contact Us</a></li>
          <li className="settingnav"><a onClick={() => handleClick('/settings')}>Settings</a></li>
          <li className="logoutnav"><a onClick={() => handleClick('/login')}>Logout</a></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar