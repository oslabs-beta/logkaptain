import React from "react";
import '../../stylesheets/dashboard.css'
import LogTable from './LogTable'



// RENDER THE LOG CARD // 
const LogCard = () => {

// ARRAY FOR ALL LOG DATA //
const logs = [];

// GET ALL LOGS CURRENTLY IN THE DB //
const gatherLogs = async () => {
    try {
        const response = await fetch('/api/logs', {
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        for (const log of data) {
           logs.push( < LogTable props={log} /> )
        }
        console.log('LOGS:', logs)
    } catch (error) {
        console.log(error);
    }
}

// CHECK FOR NEW LOGS EVERY 2 SECOND (FOR NOW) //
document.addEventListener('DOMContentLoaded', () => {
    gatherLogs();
    setInterval(gatherLogs, 2000);
})




    return (
        <div className="logcard">
            <div className="cardheader">
                <h2 className="listheader">Log Data</h2>
                <button className="connectpod">CONNECT POD</button>
            </div>
            <LogTable />
            {/* {logs} ARRAY OF LOG INFO TO BE DISPLAYED */}
        </div>
    );
};

export default LogCard