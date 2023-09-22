import React from "react";
import './NavBar'
import '../../stylesheets/dashboard.css'
import NavBar from './NavBar';
import LogCard from './LogCard';
// import SearchBar from './SearchBar'

const Dashboard = () => {
  return (
    <>
      <div className="dashcontent">
        {/* <SearchBar/> */}
        <NavBar />
        <LogCard/> 
      </div>
    </>
  )
}

export default Dashboard;