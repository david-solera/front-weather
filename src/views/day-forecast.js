import React from 'react';
import './day-forecast.css';

const DayForecast = (props) => {
  return (
      <div>
        <img src={props.image}></img>
        <div>{props.text}</div>
      </div>
  );
}

export default DayForecast;