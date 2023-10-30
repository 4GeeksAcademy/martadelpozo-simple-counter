
import React from "react";
import ReactDOM from 'react-dom';
import '/src/styles/secondscounter.css'; 


const SimpleCounter = (props) =>{
  return(<div className="seconds-counter">
    <div className="clock-icon">
     <i className="fas fa-clock"></i>
    </div>
    <div className="digit-box six">{props.digitSix}</div>
    <div className="digit-box five">{props.digitFive}</div>
    <div className="digit-box four">{props.digitFour}</div>
    <div className="digit-box three">{props.digitThree}</div>
    <div className="digit-box two">{props.digitTwo}</div>
    <div className="digit-box one">{props.digitOne}</div>

  </div>);
};

let counter = 0;
setInterval (function(){
  const six = Math.floor(counter/100000) % 10;
  const five = Math.floor(counter/10000) % 10;
  const four = Math.floor(counter/1000) % 10;
  const three = Math.floor(counter/100) % 10;
  const two = Math.floor(counter/10) % 10;
  const one = Math.floor(counter/1) % 10;
  counter++;
  ReactDOM.render(
    <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six}/>,
    document.querySelector('#app')
  );

}, 1000);