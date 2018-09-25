import React from 'react';

const Display = (props) =>
{
  return(
    <div id="display">
      <div id="label">{props.label}</div>
      <div id="time">
        {("00" + props.minutes).slice(-2)} : {("00" + props.seconds).slice(-2)}
      </div>
    </div>
  )
}

export default Display;