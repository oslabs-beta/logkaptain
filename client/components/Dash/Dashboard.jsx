import React from "react";
import './NavBar'
import '../../stylesheets/dashboard.css'
import NavBar from './NavBar';
import LogCard from './LogCard';
import SearchBar from './SearchBar'
import '../../assets/logKaptainLogo.png'
import '../../assets/logo.png'

const Dashboard = () => {
  return (
    <>
      <div className="dashcontent">
        <NavBar />
        {/* <div className = "header"> 
          <img src="logo.png" id="pagelogo" ></img>
          <img src='logKaptainLogo.png' id='logKaptainLogo'></img>
        </div> */}
        <LogCard/> 
      </div>
    </>
  )
}

export default Dashboard;