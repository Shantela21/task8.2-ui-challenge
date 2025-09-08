import "./App.css";
import logo from "./assets/images/logo.svg";
import Dropdown from "./components/dropdown";
import menu from "./assets/images/icon-menu.svg";
import databiz from "./assets/images/client-databiz.svg";
import audiophile from "./assets/images/client-audiophile.svg";
import meet from "./assets/images/client-meet.svg";
import maker from "./assets/images/client-maker.svg";
import herodesktop from "./assets/images/image-hero-desktop.png";
import heromobile from "./assets/images/image-hero-mobile.png";
import { Button1, Button2 } from "./components/button";

function App() {
  return (
    <>
      <NavSection />
      <BottomSection />
    </>
  );
}

function NavSection() {
  return (
    <div id="nav">
      <div id="Nav-Left">
        <img className="mobile-desktop" src={logo} alt="logo" />
        <div className="desktop" id="drop-downs">
          <Dropdown name="Features" />
          <Dropdown name="Company" />
          {/* <Dropdown name="Careers" />
          <Dropdown name="About" /> */}
          <p>Careers</p>
          <p>About</p>
        </div>
      </div>
      <div id="Nav-right">
        <p className="desktop">Login</p>
        <Button1 name="Register" /> 
        <img className="mobile" src={menu} alt="menu" />
      </div>
    </div>
  );
}

function BottomSection() {
  return (
    <div id="bottom-section">
      <div className="mobile-desktop main-bottom-section">
        <div className="desktop" id="bottom-section-left-desktop">
          <div id="text-content">
            <h1>
              Make <br /> remote work
            </h1>
            <p>
              Get your team in sync ,no matter your location
              <br />
              Streamline processes,create team rituals,and <br />
              watch productivity soar
            </p>
            <Button2 name="Learn more" />
          </div>
          <div id="bottom-images">
            <img src={databiz} alt="databiz" />
            <img src={audiophile} alt="audiophile" />
            <img src={meet} alt="meet" />
            <img src={maker} alt="maker" />
          </div>
        </div>
        <div
          className="desktop"
          style={{
            backgroundImage: `url(${herodesktop})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            width: "50%",
          }}
        ></div>

        <div className="mobile" id="bottom-section-left-mobile">
          <img className="mobile mobile-hero" src={heromobile} alt="hero" />
          <div id="text-content">
            <h1>Make remote work</h1>
            <p>
              Get your team in sync ,no matter your location
              <br />
              Streamline processes, create team rituals,and <br />
              watch productivity soar
            </p>
            <Button2 name="Learn more" />
          </div>
          <div id="bottom-images">
            <img src={databiz} alt="databiz" />
            <img src={audiophile} alt="audiophile" />
            <img src={meet} alt="meet" />
            <img src={maker} alt="maker" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
