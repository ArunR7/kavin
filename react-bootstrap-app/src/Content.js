import React, { Component } from "react";
import "./Content.css";
import img1 from "./img1.png";
import img2 from "./img2.png";

export default class Content extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="First_Row">
          <ul className="column1">
            <li className="head1">கட்டுரை</li>
            <span className="right">
              <ul className="d1">
                <li></li>
              </ul>
            </span>
            <li class="img1">
              <img src={img1} className="img1" alt="img1"></img>
            </li>

            <li className="b1">குர்னா என்றதும்</li>
            <hr className="b2" />
            <li className="b3">
              நடிகர் சூரியா தயாரித்து நடித்து த.செ. ஞானவேல் இயக்கியிருக்கும்
              ‘ஜெய் பீம்’ திரைப்படம் பரவலான பாராட்டுகளைப் பெற்றிருக்கிறது; அதே
              சமயம் கண்டனங்களுக்கும் உள்ளாகியிருக்கிறது .ஒடுக்கப்பட்ட இனத்தைச்
              சேர்ந்த மக்களுக்கு இழைக்கப்பட்ட அநீதியையும் அதற்கு எதிராக
              மேற்கொண்ட சட்டபூர்வமான போராட்டம் வெற்றிபெற்றதையும் படம்
              சித்தரிக்கிறது என்ற அளவில் பாராட்டுக்களைப் பெற்றிருக்கிறது
            </li>
            <li className="b4">By Santhan</li>
            <li className="b5">20 November 2021</li>
            <hr className="b6" />
          </ul>
        </div>

        <div className="SR">
          <ul className="rr1">
            <li>
              <img src={img2} className="img2" alt="img2"></img>
            </li>
            <ol className="ol1">
              <li className="c1">தலையங்கம்</li>
              <li className="c2">எல்லைக்கோடுகளின் முக்கியத்துவம்</li>
              <hr className="c3" />
              <li className="c4">
                நடிகர் சூரியா தயாரித்து நடித்து த.செ. ஞானவேல் இயக்கியிருக்கும்
                ‘ஜெய் பீம்’ திரைப்படம் பரவலான பாராட்டுகளைப் பெற்றிருக்கிறது.
                அநீதியையும அதற்கு எதிராக மேற்கொண்ட சட்டபூர்வமான போராட்டம்
                வெற்றிபெற்றதையும் படம் சித்தரிக்கிறது என்ற அளவில்
                பாராட்டுக்களைப் பெற்றிருக்கிறது
              </li>
              <li className="c5">By Santhan</li>
              <li className="c6">20 November 2021</li>
            </ol>
          </ul>
          <hr className="c7" />
        </div>
      </div>
    );
  }
}
