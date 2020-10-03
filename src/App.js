import React from 'react';
import './App.css';

function App() {
  return (
    <div className="Clock">
      <header className="Clock-header">WORLD CLOCK</header>
      <ClockContainer />
      <div className="Buttons">
        <ChangeButton type="Local" />
        <ChangeButton type="England" />
        <ChangeButton type="Budapest" />
        <ChangeButton type="Bengaluru" />
      </div>
    </div>
  );
}

function ClockContainer() {
  return (
    <div className="ClockContainer">
        <div className="ClockFace">
          <div className="Hour">
            <div className="hr"></div>
          </div>
          <div className="Minute">
            <div className="mn"></div>
          </div><div className="Second">
            <div className="sc"></div>
            </div><div className="Knob">
            <div className="sc"></div>
          </div>
        </div> 
      </div>   
  );
}

function ChangeButton(props) {
  return (
    <button className="ChangeButton">{props.type}</button>
  );
}

//http://worldtimeapi.org/api/timezone/Europe/Budapest
//http://worldtimeapi.org/api/timezone/Europe/London
//http://worldtimeapi.org/api/timezone/Asia/Kolkata

export default App;
