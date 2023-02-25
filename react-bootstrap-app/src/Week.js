import React, { Component } from "react";
import "./Week.css";

export default class Week extends Component {
  render() {
    return (
      <div className="container-fluid">
        <hr className="support" />
        <ul className="t1">
          <li className="t2">From this Week's Issue</li>
          <li className="t3">All Issues </li>
        </ul>
        <hr className="support" />
      </div>
    );
  }
}
