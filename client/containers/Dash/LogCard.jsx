import {React, useState} from "react";
import '../../stylesheets/dashboard.css'
import LogTable from './LogTable'
import { useState } from 'react';



// RENDER THE LOG CARD // 
const LogCard = () => {

// ARRAY FOR ALL LOG DATA //
<<<<<<< HEAD
const [logs, setLogs] = useState([]);


// GET ALL LOGS CURRENTLY IN THE DB //
const gatherLogs = async () => {
=======
//let logs = [];
const [logs, setLogs] = useState([]);

// GET ALL LOGS CURRENTLY IN THE DB //
const gatherLogs = async () => { // NEED TO ADD USE EFFECT TO AVOID CONSTANT CALLS
    setLogs([])
    const logTableComponents = []; // TRANSFER THIS TO STATE
>>>>>>> dev
    try {
        const response = await fetch('http://localhost:3000/api/logs', {
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
<<<<<<< HEAD
        const components = [];
        for (const log of Object.keys(data)) {
            //console.log(log)
            components.push( <LogTable key={log} name={log} log={data[log]}/> )
        }
        setLogs(components);
       // console.log('LOGS:', logs)
        //console.log('data',data['bb-demo-69f7d75fcf-f4zpv'])
=======
        for (const log of Object.keys(data)) {
            console.log('ici', data[log])

            logTableComponents.push(...data[log].map(logObject=>{

                return < LogTable key={logObject.date} date={logObject.date} name={log} log={logObject.message} /> 

            }));

            //logTableComponents.push( < LogTable key={log} name={log} log={data[log]} /> )
        }
        //console.log('LOGS:', logs)
        setLogs(logTableComponents);

>>>>>>> dev
    } catch (error) {
        console.log(error);
    }
}

// CHECK FOR NEW LOGS EVERY 2 SECOND (FOR NOW) //
// document.addEventListener('DOMContentLoaded', () => {
//     const retrievelogsBTN = document.querySelector('#retrievelogs')
//     retrievelogsBTN.addEventListener('click', () => {
//         gatherLogs();
<<<<<<< HEAD
//         //setInterval(gatherLogs, 2000);
=======
//         setInterval(gatherLogs, 2000);
>>>>>>> dev
//     })
// })




    return (
        <div className="logcard">
            <div className="cardheader">
                <h2 className="listheader">Log Data</h2>
                <button className="connectpod" onClick={gatherLogs}>Retrieve Logs</button>
                <button className="connectpod" id='retrievelogs'>CONNECT POD</button>
            </div>
<<<<<<< HEAD
            {logs}
=======
            {/* <LogTable /> */}
>>>>>>> dev
            {/* {logs} ARRAY OF LOG INFO TO BE DISPLAYED */}
            <div className="outerlogcontainer">
                <div className="innerlogcontainer">
                <h2>Date</h2>
                <h2>Pod Name</h2>
                <h2>Message</h2>
                </div>
                
                {logs}
            </div>
            
        </div>
    );
};

export default LogCard