import React from "react";
import './NavBar'
import '../../stylesheets/dashboard.css'
import NavBar from './NavBar';
import LogCard from './LogCard';
// import HeadBar from './HeadBar';
// import SearchBar from './SearchBar'


const Dashboard = () => {
    return (
        <>
            <div className="dashcontent">
                {/* <SearchBar/> */}
                {/* <HeadBar/> */}
                <NavBar />
                <LogCard/> 
                
                   
            </div>
            
        </>
    )
}


export default Dashboard;