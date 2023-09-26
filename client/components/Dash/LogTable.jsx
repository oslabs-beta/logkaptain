import React from "react";
import '../../stylesheets/dashboard.css'
import { Backdrop, BrandedHeader, Button, Container, Form, Input, ErrorMessage } from '../Auth/Backdrop.jsx';

// LOG DATA PASSED DOWN INTO PROPS //
const LogTable = (props) => {
    const {date, name, log, onClick} = props;

// console.log('PROPS', props);

  return (
    <>
      <div className="cell log" onClick={() => onClick(log)}>{date}</div>
      <div className="cell midlog" onClick={() => onClick(log)}>{name}</div>
      <div className="cell log" onClick={() => onClick(log)}>{log}</div>
    </>
    // <div onClick={() => onClick(log)}>
    //   <div className="cell log">{date}</div>
    //   <div className="cell midlog">{name}</div>
    //   <div className="cell log">{log}</div>
    // </div>
  );
};

export default LogTable