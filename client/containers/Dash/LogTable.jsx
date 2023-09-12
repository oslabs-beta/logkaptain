import React from "react";
import '../../stylesheets/dashboard.css'



// LOG DATA PASSED DOWN INTO PROPS //
const LogTable = (props) => {
    const {date, name, log} = props;

// console.log('PROPS', props);

    return (
        <>
        {/* <div className="outerlogcontainer"> */}
            <div className="innerlogcontainer">
                
                {/* <h2>{name}</h2> */}
                <div>{date}</div>
                <div>{name}</div>
                <div>{log}</div>
        </div>
        </>
    );
};




export default LogTable