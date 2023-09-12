import React from "react";
import '../../stylesheets/dashboard.css'



// LOG DATA PASSED DOWN INTO PROPS //
const LogTable = (props) => {
    const {date, name, log} = props;

console.log('PROPS', props);

    return (
        <>
        {/* <div className="outerlogcontainer"> */}
            <div className="innerlogcontainer">
                {/* <h2>{name}</h2> */}
                <div>{date}</div>
                <div>{name}</div>
                <div>{log}</div>
            {/* <table>
                <thead>
                <tr>
                    <th>DATE</th>
                    <th>MESSAGES</th>
                    <th>POD</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>September 9th 2023</td>
                    {/* <td>{props.timestamp}</td> date info from BE */}
                    {/* <td>OSP1 Rules</td> */}
                    {/* <td>{props.log}</td> log info from BE */}
                    {/* <td>POD1</td> */}
                    {/* <td>{props.id}</td> ID info from BE */}
                    {/* </tr> */}
                {/* </tbody> */}
            {/* </table> */} 
            {/* </div> */}
        </div>
        </>
    );
};




export default LogTable