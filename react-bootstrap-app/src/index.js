import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Carousel from "./Carousel";
import Content from "./Content";
import Support from "./Support";
import Magazine from "./Magazine";
import Week from "./Week";
import Issue from "./Issue";
import Essay from "./Essay";
import Section from "./Section";
import Essay2 from "./Essay2";
import Contributor from "./Contributor";
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Carousel />
    <Content />
    <Support />
    <Magazine />
    <Week />
    <Issue />
    <Essay />
    <Section />
    <Essay2 />
    <Contributor />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
