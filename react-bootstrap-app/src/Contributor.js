import React, { Component } from "react";
import "./Contributor.css";
import rectangle from "./Rectangle 102.png";
import WM from "./Weekly_M.png";
import BS from "./Group_1.png";
import footer from "./Footer.png";

export default class Contributor extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="contributor">
          <ul>
            <li className="a1">கட்டுரை </li>

            <li className="a2">எல்லைக்கோடுகளின் முக்கியத்துவம் </li>
            <ol className="aa1">
              <li className="a3">By R.Krishnamoorthy</li>

              <li className="a4">
                {" "}
                <img
                  src={rectangle}
                  className="rectangle"
                  alt="rectangle"
                ></img>
              </li>
              <hr className=" SLL" />
              <img src={WM} className="WM" alt="Weekly"></img>
            </ol>
          </ul>
        </div>
        <img src={BS} className="BS" alt="Book Store"></img>

        <img src={footer} className="footer" alt="footer"></img>
      </div>
    );
  }
}
