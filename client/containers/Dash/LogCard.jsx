import React from "react";
import '../../stylesheets/dashboard.css'
import LogTable from './LogTable'
import { useState } from 'react';



// RENDER THE LOG CARD // 
const LogCard = () => {

// ARRAY FOR ALL LOG DATA //
const [logs, setLogs] = useState([]);


// GET ALL LOGS CURRENTLY IN THE DB //
const gatherLogs = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/logs', {
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        const components = [];
        for (const log of Object.keys(data)) {
            //console.log(log)
            components.push( <LogTable key={log} name={log} log={data[log]}/> )
        }
        setLogs(components);
       // console.log('LOGS:', logs)
        //console.log('data',data['bb-demo-69f7d75fcf-f4zpv'])
    } catch (error) {
        console.log(error);
    }
}

// CHECK FOR NEW LOGS EVERY 2 SECOND (FOR NOW) //
// document.addEventListener('DOMContentLoaded', () => {
//     const retrievelogsBTN = document.querySelector('#retrievelogs')
//     retrievelogsBTN.addEventListener('click', () => {
//         gatherLogs();
//         //setInterval(gatherLogs, 2000);
//     })
// })




    return (
        <div className="logcard">
            <div className="cardheader">
                <h2 className="listheader">Log Data</h2>
                <button className="connectpod" onClick={gatherLogs}>Retrieve Logs</button>
                <button className="connectpod" id='retrievelogs'>CONNECT POD</button>
            </div>
            {logs}
            {/* {logs} ARRAY OF LOG INFO TO BE DISPLAYED */}
        </div>
    );
};

export default LogCard