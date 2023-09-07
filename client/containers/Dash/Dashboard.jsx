import React from "react";
import './NavBar'
import '../../stylesheets/dashboard.css'
import NavBar from './NavBar';
import SearchBar from './SearchBar'
import LogCard from './LogCard'

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