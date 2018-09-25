import React from 'react';

const OptionPanel = (props) =>
{
  return(
    <div id="optionPanel">
      <button id="start" onClick={props.start}><i className="fa fa-play fa-2x"></i></button>
      <button id="start" onClick={props.stop}><i className="fa fa-stop fa-2x"></i></button>
      <button id="start" onClick={props.restart}><i className="fa fa-refresh fa-2x"></i></button>
    </div>
  )
}

export default OptionPanel;