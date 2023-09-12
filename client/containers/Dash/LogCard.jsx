import {React, useState} from "react";
import '../../stylesheets/dashboard.css'
import LogTable from './LogTable'



// RENDER THE LOG CARD // 
const LogCard = () => {

// ARRAY FOR ALL LOG DATA //
//let logs = [];
const [logs, setLogs] = useState([]);

// GET ALL LOGS CURRENTLY IN THE DB //
const gatherLogs = async () => { // NEED TO ADD USE EFFECT TO AVOID CONSTANT CALLS
    setLogs([])
    const logTableComponents = []; // TRANSFER THIS TO STATE
    try {
        const response = await fetch('http://localhost:3000/api/logs', {
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        for (const log of Object.keys(data)) {
            console.log('ici', data[log])

            logTableComponents.push(...data[log].map(logObject=>{

                return < LogTable key={logObject.date} date={logObject.date} name={log} log={logObject.message} /> 

            }));

            //logTableComponents.push( < LogTable key={log} name={log} log={data[log]} /> )
        }
        //console.log('LOGS:', logs)
        setLogs(logTableComponents);

    } catch (error) {
        console.log(error);
    }
}

// CHECK FOR NEW LOGS EVERY 2 SECOND (FOR NOW) //
// document.addEventListener('DOMContentLoaded', () => {
//     const retrievelogsBTN = document.querySelector('#retrievelogs')
//     retrievelogsBTN.addEventListener('click', () => {
//         gatherLogs();
//         setInterval(gatherLogs, 2000);
//     })
// })




    return (
        <div className="logcard">
            <div className="cardheader">
                <h2 className="listheader">Log Data</h2>
                <button className="connectpod" onClick={gatherLogs}>Retrieve Logs</button>
                <button className="connectpod" id='retrievelogs'>CONNECT POD</button>
            </div>
            {/* <LogTable /> */}
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