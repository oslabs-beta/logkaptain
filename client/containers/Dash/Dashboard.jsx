import React from "react";
import './NavBar'
import '../../stylesheets/dashboard.css'
import NavBar from "./NavBar";

const Dashboard = () => {
    return (
        <>
            <div className="dashcontent">
            <div className="logcard">
               <ul></ul> 
            </div>
            <NavBar />
            </div>
        </>
    )
}


export default Dashboard;