import React from "react";
import '../../stylesheets/dashboard.css'


const LogCard = () => {
    return (
        <div className="logcard">
            <h2 className="listheader">Log Data</h2>
            <button className="connectpod">CONNECT POD</button>
            <ul></ul>
        </div>
    );
};

export default LogCard