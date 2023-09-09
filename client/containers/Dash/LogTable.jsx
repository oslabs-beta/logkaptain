import React from "react";
import '../../stylesheets/dashboard.css'




const LogTable = () => {

// FETCH LOG DATA HERE (Create array of table rows)


    return (
        <div>
        <div className="logtable">
            <table>
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
                    <td>OSP1 Rules</td>
                    <td>POD1</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    );
};




export default LogTable