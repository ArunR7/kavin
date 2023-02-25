import React, { Component } from "react";
import "./Magazine.css";
import si1 from "./si1.png";
import si2 from "./si2.png";
import si3 from "./si3.png";

export default class Magazine extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div class="magazines">
          <ul class="e1">
            <li class="e2">Magazines</li>
            <li class="e3">All Issues </li>
          </ul>
          <hr class="support" />
        </div>
        <div className="section1">
          <ul className="ss1">
            <ol className="g1">
              <li>
                <img src={si1} className="si1" alt="si1"></img>
              </li>
              <li className="l1">திரை</li>
              <li className="l2">எல்லைக்கோடுகளின் முக்கியத்துவம்</li>
              <li className="l3">
                Home grown சிவப்பு, மஞ்சள், நீலம், இளஞ்சிவப்பு, கருப்பு என
                விதவிதமான வண்ணங்களைச் சூடிக்கொண்டிருந்த அடிவானத்தின் காட்சி
                அப்போது முடியவில்லை
              </li>
              <li className="l4">By R.Krishnamoorthy</li>
            </ol>
            <ol className="j1">
              <li>
                <img src={si2} className="si2" alt="si2"></img>
              </li>
              <li className="l1">தலையங்கம்</li>
              <li className="l2">எல்லைக்கோடுகளின் முக்கியத்துவம்</li>
              <li className="l3">
                Home grown சிவப்பு, மஞ்சள், நீலம், இளஞ்சிவப்பு, கருப்பு என
                விதவிதமான வண்ணங்களைச் சூடிக்கொண்டிருந்த அடிவானத்தின் காட்சி
                அப்போது முடியவில்லை
              </li>
              <li className="l4">By R.Krishnamoorthy</li>
            </ol>
            <ol className="k1">
              <li>
                <img src={si3} className="si3" alt="si3"></img>
              </li>
              <li className="l1">கட்டுரை</li>
              <li className="l2">எல்லைக்கோடுகளின் முக்கியத்துவம்</li>
              <li className="l3">
                Home grown சிவப்பு, மஞ்சள், நீலம், இளஞ்சிவப்பு, கருப்பு என
                விதவிதமான வண்ணங்களைச் சூடிக்கொண்டிருந்த அடிவானத்தின் காட்சி
                அப்போது முடியவில்லை
              </li>
              <li className="l4">By R.Krishnamoorthy</li>
            </ol>
          </ul>
        </div>

        <hr className="support" />

        <div className="section1">
          <ul className="ss1">
            <ol className="g1">
              <li>
                <img src={si1} className="si1" alt="si1"></img>
              </li>
              <li className="l1">திரை</li>
              <li className="l2">எல்லைக்கோடுகளின் முக்கியத்துவம்</li>
              <li className="l3">
                Home grown சிவப்பு, மஞ்சள், நீலம், இளஞ்சிவப்பு, கருப்பு என
                விதவிதமான வண்ணங்களைச் சூடிக்கொண்டிருந்த அடிவானத்தின் காட்சி
                அப்போது முடியவில்லை
              </li>
              <li className="l4">By R.Krishnamoorthy</li>
            </ol>
            <ol className="j1">
              <li>
                <img src={si2} className="si2" alt="si2"></img>
              </li>
              <li className="l1">தலையங்கம்</li>
              <li className="l2">எல்லைக்கோடுகளின் முக்கியத்துவம்</li>
              <li className="l3">
                Home grown சிவப்பு, மஞ்சள், நீலம், இளஞ்சிவப்பு, கருப்பு என
                விதவிதமான வண்ணங்களைச் சூடிக்கொண்டிருந்த அடிவானத்தின் காட்சி
                அப்போது முடியவில்லை
              </li>
              <li className="l4">By R.Krishnamoorthy</li>
            </ol>
            <ol className="k1">
              <li>
                <img src={si3} className="si3" alt="si3"></img>
              </li>
              <li className="l1">கட்டுரை</li>
              <li className="l2">எல்லைக்கோடுகளின் முக்கியத்துவம்</li>
              <li className="l3">
                Home grown சிவப்பு, மஞ்சள், நீலம், இளஞ்சிவப்பு, கருப்பு என
                விதவிதமான வண்ணங்களைச் சூடிக்கொண்டிருந்த அடிவானத்தின் காட்சி
                அப்போது முடியவில்லை
              </li>
              <li className="l4">By R.Krishnamoorthy</li>
            </ol>
          </ul>
        </div>
      </div>
    );
  }
}
