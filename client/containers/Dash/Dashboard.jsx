import React from "react";
import './NavBar'
import '../../stylesheets/dashboard.css'
import NavBar from "./NavBar";

const Dashboard = () => {
    return (
        <>
            <div className="dashcontent">
                <NavBar />
                <div className="logcard">
                    <ul></ul>
                </div>
            <button className="connectpod">CONNECT POD</button>
            </div>
            
        </>
    )
}


export default Dashboard;