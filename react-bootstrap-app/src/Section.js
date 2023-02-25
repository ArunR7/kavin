import React, { Component } from "react";
import "./Section.css";
import vv1 from "./Group 54.png";
import frame6 from "./Frame 6.png";

export default class Section extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="sections">
          <h1 className="sss">Sections</h1>
          <ul className="hnb">
            <li>
              {" "}
              <img src={vv1} className="vv1" alt="vv1"></img>
            </li>
            <ol className="hnb2">
              <li className="f6">
                {" "}
                <img src={frame6} className="frame6" alt="frame6"></img>
              </li>
            </ol>
          </ul>
        </div>
      </div>
    );
  }
}
