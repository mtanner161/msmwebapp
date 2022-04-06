import React from "react";
import "./Home.css";
import CSM from "./images/csmLarge.png";
import Accordion from "./Accordion";
import StepperBetter from "./Stepper";

const Home = () => {
  return (
    <div className="background-color">
      <br></br>
      <br></br>
      <img src={CSM} className="image" width="750"></img>
      <h1>Mines Mineral Model</h1>
      <h2>by Michael Tanner and Wilson Martin</h2>
      <br></br>
      <div className="stepper">
        <StepperBetter />
      </div>
      <br></br>
      <div className="accordion">
        <Accordion />
      </div>
    </div>
  );
};

export default Home;
