import React from "react";
import '../../stylesheets/dashboard.css'



// LOG DATA PASSED DOWN INTO PROPS //
const LogTable = (props) => {
    const {name, log} = props;

// console.log('PROPS', props);

    return (
        <div>
        <div className="outerlogcontainer">
            <div className="innerlogcontainer">
                <h2>{name}</h2>
              
                <div>{log}</div>
            </div>
        </div>
        </div>
    );
};




export default LogTable