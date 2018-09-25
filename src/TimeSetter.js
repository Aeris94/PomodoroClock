import React from 'react';

const TimeSetter = (props) =>
{
  return(
    <div className="timeSetter" id={props.id}>
      <div className="setterLabel">{props.label}</div>
      <div className="timer" id={props.id}>
        <button className="timeButton" value={-1} onClick={props.onClick}><i className="fa fa-angle-double-down fa-2x"></i></button>
        <div className="setterTime">{props.time}</div>
        <button className="timeButton" value={1} onClick={props.onClick}><i className="fa fa-angle-double-up fa-2x"></i></button>
      </div>  
    </div>
  )
}

export default TimeSetter;