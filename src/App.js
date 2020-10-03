import React from 'react';
import clockface from './clockface.png';
import './App.css';

function App() {
  return (
    <div className="Clock">
      <header className="Clock-header">WORLD CLOCK</header>
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
    </div>
  );
}

export default App;
