import React from "react";
import '../../stylesheets/dashboard.css'
import { Backdrop, BrandedHeader, Button, Container, Form, Input, ErrorMessage } from '../Auth/Backdrop.jsx';

// LOG DATA PASSED DOWN INTO PROPS //
const LogTable = (props) => {
    const {date, name, log} = props;

// console.log('PROPS', props);

  return (
    <>
      <div className="cell log">{date}</div>
      <div className="cell midlog">{name}</div>
      <div className="cell log">{log}</div>
    </>
  );
};

export default LogTable