import React, { Component } from "react";
import "./Issue.css";
import wrapper from "./wrapper.png";

export default class Issue extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="year">
          <ul className="y1">
            <ol>
              <li className="y2">25(1996-2021)ஆண்டுகள்</li>
              <li className="y3">ஒருங்கிணைப்பு - எம். பௌசர், லண்டன்</li>
              <li className="y5">Table of Contents </li>
            </ol>
            <ol>
              <img src={wrapper} className="y4" alt="y4"></img>
            </ol>
          </ul>
        </div>
      </div>
    );
  }
}
