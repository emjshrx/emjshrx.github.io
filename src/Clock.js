import React, {useEffect, useState} from 'react';
import './Clock.css';

function Clock() {
  const [hourHand,setHourhand] = useState(0);
  const [minuteHand,setMinutehand] = useState(0);
  const [secondHand,setSecondhand] = useState(0);
  const [location,setLocation] = useState('Local');
  const [locationactive,setLocationactive] = useState('Local');

  useEffect ( () => {
    chooseLocal(setHourhand,setMinutehand,setSecondhand);
  }, []
  )

  useEffect(() => {
    
    if (location==='Local') {
      chooseLocal(setHourhand,setMinutehand,setSecondhand);
      setLocationactive(location);
    }
    else {

    
      var request = new XMLHttpRequest()

      switch(location) {
        case 'Bengaluru':  
        request.open('GET', 'https://worldtimeapi.org/api/timezone/Asia/Kolkata', true);
        break;
        case 'Budapest':  
        request.open('GET', 'https://worldtimeapi.org/api/timezone/Europe/Budapest', true);
        break;
        case 'London':  
        request.open('GET', 'https://worldtimeapi.org/api/timezone/Europe/London', true);
        break;
        default:
      }
        request.onload = function () {
          // Begin accessing JSON data here
          var data = JSON.parse(this.response)
          
          const beg = data['datetime'].search('T');
          let hr = data['datetime'][beg+1] + data['datetime'][beg+2];
          hr = parseInt(hr);
          let mn = data['datetime'][beg+4] + data['datetime'][beg+5];
          mn = parseInt(mn);
          let sc = data['datetime'][beg+7] + data['datetime'][beg+8];
          sc = parseInt(sc);

          setHourhand(hr);
          setMinutehand(mn);
          setSecondhand(sc);
          setLocationactive(location);
          }
        // Send request
        request.send();

        }
    
  },[location]
  )
  
  return (
    <div className="Clock">
      <header className="Clock-header">WORLD CLOCK</header>
      <ClockContainer hands={[hourHand,minuteHand,secondHand]} setters={[setSecondhand,setMinutehand,setHourhand]}/>
      <ButtonSet setLocation={setLocation} Locationactive={locationactive}/>
    </div>
  );
}


function ClockContainer(props) {
  const [hourHand,minuteHand,secondHand] = props.hands ;
  const [setSecondhand,setMinutehand,setHourhand] = props.setters;
  let hourAngle = (hourHand * 30) + (minuteHand * 0.5) + 90 ;
  let minuteAngle = (minuteHand * 6) +(secondHand*0.1) + 90 ;
  let secondAngle = (secondHand * 6) + 90 ;
  useEffect( () => {
    let interval = setInterval(() => {
    setSecondhand(secondHand + 1);
    if (secondHand>59) {
      setSecondhand(0);
      setMinutehand(minuteHand+1);
    }
    if (minuteHand>59) {
      setMinutehand(0);
      setHourhand(hourHand+1);
    }
  }, 1000);
    return () => clearInterval(interval);
  }, [secondHand,minuteHand,hourHand]
  );
  
  return (
    <div className="ClockContainer">
        <div className="ClockFace">
          <div className="Hour" style={{transform: `rotate(${hourAngle}deg)`}}>
            <div className="hr"></div>
          </div>
          <div className="Minute" style={{transform: `rotate(${minuteAngle}deg)`}}>
            <div className="mn"></div>
          </div>
          <div className="Second" style={{transform: `rotate(${secondAngle}deg)`}}>
            <div className="sc"></div>
          </div>
          <div className="Knob">
            <div className="sc"></div>
          </div>
        </div> 
      </div>   
  );
}

function ButtonSet ({setLocation, Locationactive}) {
  return (
    <div className="Buttons">
        <ChangeButton type="Local" setLocation={setLocation} Locationactive={Locationactive}/>
        <ChangeButton type="London" setLocation={setLocation} Locationactive={Locationactive}/>
        <ChangeButton type="Budapest" setLocation={setLocation} Locationactive={Locationactive}/>
        <ChangeButton type="Bengaluru" setLocation={setLocation} Locationactive={Locationactive}/>
      </div>
  )
}

function ChangeButton(props) {
  return (
    <button className="ChangeButton" onClick={() => {props.setLocation(props.type)}} style={{color: `${props.Locationactive==props.type? '#ff7070': ''}` }}>{props.type}</button>
  );
}

function chooseLocal(setHourhand,setMinutehand,setSecondhand){
  var now = new Date();
  setHourhand(now.getHours());
  setMinutehand(now.getMinutes());
  setSecondhand(now.getSeconds());
}

//http://worldtimeapi.org/api/timezone/Europe/Budapest props.setLocation(props.type)
//http://worldtimeapi.org/api/timezone/Europe/London
//http://worldtimeapi.org/api/timezone/Asia/Kolkata

export default Clock;
