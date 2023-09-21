import { React, useState } from "react";
import '../../stylesheets/dashboard.css'
import LogTable from './LogTable'
import forge from 'node-forge';
import axios from 'axios';

// RENDER THE LOG CARD // 
const LogCard = () => {

  // FUNCTION TO GENERATE RSA KEY //
  function handleSubmit() {

    function generateRSAKeyPair() {
      // Generate an RSA key pair with a 2048-bit key size
      const keyPair = forge.pki.rsa.generateKeyPair({ bits: 2048 });

      // Convert the keys to PEM format (PKCS#1)
      const privateKeyPem = forge.pki.privateKeyToPem(keyPair.privateKey);
      const publicKeyPem = forge.pki.publicKeyToPem(keyPair.publicKey);
      console.log('Private Key (PEM):', privateKeyPem);
      console.log('Public Key (PEM):', publicKeyPem);
      return { privateKeyPem, publicKeyPem };
    }
    generateRSAKeyPair();
    return;
  }


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
        logTableComponents.push(...data[log].map(logObject => {
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



  // const authenticate = async () => {
  //   try {
  //     // Make a GET request to your backend's OAuth initiation route
  //     const response = await axios.get('http://localhost:5173/oauth');

  //     console.log('OAuth initiation successful');
  //     // Handle response or redirect based on your application's requirements
  //     window.location.href = 'http://localhost:5173/dashboard'
  //   } catch (error) {
  //     console.error('OAuth initiation failed:', error);
  //     // Handle error, display error message to the user, etc.
  //   }
  // };

  const authenticate = async (e) => {
    e.preventDefault()    

    try {
    const response = await fetch('http://localhost:3000/oauth', {
      method: 'GET',
      mode: 'cors',
     });
    console.log('OAuth initiation successful');
    window.location.href = 'http://localhost:5173/dashboard'
    } catch (error) {
      console.log('Error with get request to backend from Jira button');
    }
  };


  return (
    <div className="logcard">
      <div className="cardheader">
        <h2 className="listheader">Log Data</h2>
        <button className="connectpod" onClick={gatherLogs}>Retrieve Logs</button>
        <button className="connectpod" id='oauthButton' onClick={authenticate}>Connect to JIRA</button>
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