import React from "react";
import "./Expertise.css";
import LocalNavbar from "../LocalNavbar/LocalNavbar";

function Expertise() {
  return (
    <div style={{ backgroundColor: 'gray', height: "100vh" }}>
      <table className="d-flex flex-column justify-content-center text-center align-items-center h-100">
        <thead>
          <tr>
            <th>Project</th>
            <th>Tech</th>
            <th>This</th>
            <th>That</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stuff</td>
            <td>Stuff</td>
            <td>Stuff</td>
            <td>Stuff</td>
          </tr>
          <tr>
            <td>Stuff</td>
            <td>Stuff</td>
            <td>Stuff</td>
            <td>Stuff</td>
          </tr>
          <tr>
            <td>Stuff</td>
            <td>Stuff</td>
            <td>Stuff</td>
            <td>Stuff</td>
          </tr>
          <tr>
            <td>Stuff</td>
            <td>Stuff</td>
            <td>Stuff</td>
            <td>Stuff</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Expertise;
