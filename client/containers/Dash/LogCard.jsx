import React from "react";
import '../../stylesheets/dashboard.css'
import LogTable from './LogTable'


const LogCard = () => {
    return (
        <div className="logcard">
            <div className="cardheader">
            <h2 className="listheader">Log Data</h2>
            <button className="connectpod">CONNECT POD</button>
            </div>
            <LogTable/>
            <ul></ul>
        </div>
    );
};

export default LogCard