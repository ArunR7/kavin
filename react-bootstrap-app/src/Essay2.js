import React, { Component } from "react";
import "./Essay.css";
import es1 from "./line_2.png";
import slider from "./slider.png";
import ss2 from "./ss2.png";
import ss3 from "./ss3.png";
import ss4 from "./ss4.png";
import red from "./red.png";

export default class Essay2 extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="essay">
          <img src={es1} className="es1" alt="es1"></img>
          <li>
            <li className="u1">கவிதைகள் </li>
          </li>
          <ul className="flex1">
            <ol>
              <li className="kk1">
                <img src={slider} className="slider" alt="slider"></img>
              </li>
              <li className="yy1">கட்டுரை{""}</li>
              <li className="qq1">எல்லைக்கோடுகளின் முக்கியத்துவம் </li>
              <hr className="qq3" />
              <li className="qq2">By R.Krishnamoorthy</li>
              <li className="qq2">20 November 2021</li>
            </ol>
            <ol>
              <li className="kk2">
                {" "}
                <img src={ss2} className="ss2" alt="ss2"></img>
              </li>
              <li className="yy2">கட்டுரை </li>
              <li className="ww1">எல்லைக்கோடுகளின் முக்கியத்துவம் </li>
              <hr className="ww3" />
              <li className="ww2">By R.Krishnamoorthy</li>
              <li className="ww2">20 November 2021</li>
            </ol>
            <ol>
              <li className="kk3">
                <img src={ss3} className="ss3" alt="ss3"></img>
              </li>
              <li className="yy3">கட்டுரை </li>
              <li className="ww1">எல்லைக்கோடுகளின் முக்கியத்துவம் </li>
              <hr className="ww3" />
              <li className="ww2">By R.Krishnamoorthy</li>
              <li className="ww2">20 November 2021</li>
            </ol>
            <ol>
              <li className="kk4">
                {" "}
                <img src={ss4} className="ss4" alt="ss4"></img>
              </li>
              <li className="yy4">கட்டுரை </li>
              <li className="ww1">எல்லைக்கோடுகளின் முக்கியத்துவம் </li>
              <hr className="ww3" />
              <li className="ww2">By R.Krishnamoorthy</li>
              <li className="ww2">20 November 2021</li>
            </ol>
          </ul>
          <div class="Slider">
            <img src={red} className="red" alt="red"></img>
          </div>
        </div>

        <hr className="support" />
        <li className="e2">Contributors</li>
        <hr className="support"></hr>
      </div>
    );
  }
}
