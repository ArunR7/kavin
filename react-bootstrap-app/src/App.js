import "./App.css";
import logo from "./Logo.png";
import Hamburger from "./Hamburger.png";
import Subscribe from "./Subscribe.png";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container-fluid">
      <ul className="Header">
        <li className="Main-Logo">
          <img src={logo} className="Main-Logo" alt="Logo"></img>
        </li>

        <li className="Product-Name">Kalachuvadu</li>
        <ol className="RS">
          <li className="Hamburger-Menu">
            <img src={Hamburger} className="Hamburger" alt="Ham"></img>
          </li>
          <li className="Sign">Sign In</li>
          <li className="Subscribe">
            <img src={Subscribe} className="Subscribe" alt="Sub"></img>
          </li>
        </ol>
      </ul>

      <div className="align">
        <div class="row row-cols-auto">
          <div class="fw-normal">தலையங்கம்</div>
          <div class="col">|</div>
          <div class="fw-normal">கட்டுரை</div>
          <div class="col">|</div>
          <div class="fw-normal">திரை</div>
          <div class="col">|</div>
          <div class="fw-normal">கவிதைகள்</div>
          <div class="col">|</div>
          <div class="fw-normal">பாரதியியல்</div>
          <div class="col">|</div>
          <div class="fw-normal">நூல் வாசனை</div>
          <div class="col">|</div>
          <div class="fw-normal">பதிப்பு</div>
          <div class="col">|</div>
          <div class="fw-normal">புத்தகப் பகுதி</div>
          <div class="col">|</div>
          <div class="fw-normal">குறுங்கதை</div>
          <div class="col">|</div>
          <div class="fw-normal">பாரதியியல்</div>
        </div>
      </div>
    </div>
  );
}

export default App;
