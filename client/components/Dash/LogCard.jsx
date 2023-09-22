import {React, useState} from "react";
import '../../stylesheets/dashboard.css'
import LogTable from './LogTable'
import SearchBar from "./SearchBar";

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
    // const response = await fetch(`http://localhost:${process.env.PORT}/api/logs`, {
    const response = await fetch(`https://log-kaptain-d63e4fff3d60.herokuapp.com/api/logs`, {
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    for (const log of Object.keys(data)) {
      //console.log('ici', data[log])
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
        <button className="connectpod" id='retrievelogs'>Connect Pod</button>
      </div>
      <div classname="searchbar"> 
        <SearchBar /> 
      </div>
      {/* <LogTable /> */}
      {/* {logs} ARRAY OF LOG INFO TO BE DISPLAYED */}

      <div className="gridHeader grid-container">
        <div className="cell">
          Date (UTC)
        </div>
        <div className="cell">
          Pod Name
        </div >
        <div className="cell">
          Message
        </div>
      </div>

      <div className="gridLogs grid-container">
        {logs}
      </div>

      {/* <div className="outerlogcontainer">
          <div className="innerlogcontainerHeader">
          <h2>Date</h2>
          <h2>Pod Name</h2>
          <h2>Message</h2>
          </div>
        </div> */}
      {/* <div className="innerlogcontainerWrapper">
        {logs}
      </div>     */}
    </div>
  );
};

export default LogCard