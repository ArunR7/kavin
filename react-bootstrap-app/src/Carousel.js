import React, { Component } from "react";
import "./Carousel.css";
import Banner from "./Subtract.png";
import Click from "./Click.png";
import Clock from "./Clock.png";

export default class Carousel extends Component {
  render() {
    return (
      <div className="banner">
        <img src={Banner} className="banner" alt="banner" />

        <div className="B2">
          <ul className="SL2">
            <li className="Thirai">திரை</li>
            <li className="SL2B">செந்நாய்: காட்சியில் தெளிதல்</li>
            <hr className="SLR" />
            <li className="MTB1">By Veera</li>
            <li className="MTB2">20 November 2021</li>
          </ul>
          <ul className="SL3">
            <li>
              <img src={Click} className="Click" alt="Click-up" />
            </li>
            <li className="cl1">
              <img src={Clock} className="Clock" alt="Clock-up" />
            </li>
            <li className="cl2">3 Minutes Read</li>
          </ul>
        </div>
      </div>
    );
  }
}
