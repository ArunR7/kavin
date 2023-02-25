import React, { Component } from "react";
import "./Support.css";
import "./Support.css";
import support from "./support.png";

export default class Support extends Component {
  render() {
    return (
      <div className="container-fluid">
        <img src={support} className="subscribe" alt="support" />
        <hr className="support" />
      </div>
    );
  }
}
