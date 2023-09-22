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
          <li className="dashnav"><button onClick={() => handleClick('/dashboard')}>Dashboard</button></li>
          <li className="teamnav"><button onClick={() => handleClick('/dashboard')}>Team</button></li>
          <li className="settingnav"><button onClick={() => handleClick('/dashboard')}>Settings</button></li>
          <li className="logoutnav"><button onClick={() => handleClick('/login')}>Logout</button></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar