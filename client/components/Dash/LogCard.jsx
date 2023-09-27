import {React, useState} from "react";
import '../../stylesheets/dashboard.css'
import LogTable from './LogTable'
import { Backdrop, BrandedHeader, Button, ButtonCSV, ButtonDash, Container, Form, Input, ErrorMessage } from '../Auth/Backdrop.jsx';
import SearchBar from "./SearchBar";
import '../../assets/logKaptainLogo.png'

// RENDER THE LOG CARD // 
const LogCard = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');


  // Open the modal when a LogTable component is clicked
  const openModal = (summary, description) => {
    setSummary(summary);
    setDescription(description);
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };

  const submitIssue = async () => {
    setSummary(summary.trim()) 
    setDescription(description.trim())
    if (summary === '' || description === '') alert('Summary and Descrition required')
    try {
      const response = await fetch(`${apiUrl}api/issue`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({
        summary: summary,
        description: description,
      }), 
    });
    const data = await response.json()
    alert(`Issue ${data.key} created in JIRA`)
    closeModal();
    } catch (error) {
      console.log(error)
    }
    
  }
// ARRAY FOR ALL LOG DATA //
//let logs = [];
const [logs, setLogs] = useState([]);
const [searchInput, setSearchInput] = useState(""); 
// GET ALL LOGS CURRENTLY IN THE DB //
const gatherLogs = async () => { // NEED TO ADD USE EFFECT TO AVOID CONSTANT CALLS
  setLogs([])
  const logTableComponents = []; // TRANSFER THIS TO STATE
  let data; 
  try {
    if(k8Enabled==='true') {
      const response = await fetch(`${apiUrl}api/logs`, {
        headers: { 'Content-Type': 'application/json' },
      });
      data = await response.json();
    } else {
      // sample log data [{}, {}] key date name log
      data = {pod1: [{date: Date.now(), message: "Chris was here"}, 
                    {date: Date.now()+1, message: "Micah was here"}, 
                    {date: Date.now()+2, message: "Sharmarke was here"}], 
                  pod2: [{date: Date.now()+3, message: "Gabby was here"},
                    {date: Date.now()+4, message: "Caro was here"}]};
    }

    for (const log of Object.keys(data)) {
      logTableComponents.push(...data[log].map(logObject=>{
        return < LogTable 
                  key={logObject.date + ' ' + log} 
                  date={logObject.date} 
                  name={log} 
                  log={logObject.message} 
                  onClick={() => openModal(summary, logObject.message)}/> 
      }));
      //logTableComponents.push( < LogTable key={log} name={log} log={data[log]} /> )
    }

    setLogs(logTableComponents)

  } catch (error) {
    console.log(error);
  }
}

const filterLogs = () => {

  const arr = logs.filter(el => 
    `${el.key}`.includes(searchInput) || 
    `${el.props.date}`.includes(searchInput) || 
    `${el.props.name}`.includes(searchInput) || 
    `${el.props.log}`.includes(searchInput)).slice();

    setLogs([]);
    setLogs(arr);
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
        <ButtonDash>Connect Pod</ButtonDash> 
          {/* <button className="connectpod" onClick={gatherLogs}>Retrieve Logs</button>
          <button className="connectpod" id='retrievelogs'>Connect Pod</button>      */}
        <ButtonDash onClick={gatherLogs}>Retrieve Logs</ButtonDash>
        <div className="searchBar"><SearchBar setSearchInput={setSearchInput}/> <button onClick={filterLogs}>Search</button></div>
        

      </div>

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
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
          <button className="close" onClick={closeModal}>X</button>
            <h3>Create Issue</h3>
            <div className="flex-modal-content "><label>Summary</label>
            <textarea type="text" value={summary} 
            onChange={(e) => setSummary(e.target.value)}/></div>

            <div className="flex-modal-content "><label>Description</label>
            <textarea value={description} 
            onChange={(e) => setDescription(e.target.value)}/></div>
            <button className="submit" onClick={submitIssue}>Submit</button>
          </div>
        </div>
      )}

      <ButtonCSV as="a" href={`${apiUrl}api/download`} id='downloadlogs'>Download .CSV</ButtonCSV> 
    </div>
  );
};

export default LogCard;