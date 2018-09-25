import React, { Component } from 'react';
import './App.css';
import Display from './Display.js';
import OptionPanel from './OptionPanel.js';
import TimeSetter from './TimeSetter.js';

class PomodoroClock extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      session: 25, 
      break: 5,
      sessionLeft: 25,
      seconds: 0,
      label: "SESSION",
      clockRun: false,
      intervalId: '',
    }
    
    this.setTime = this.setTime.bind(this);
    this.handleTimeCount = this.handleTimeCount.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.restart = this.restart.bind(this);
    this.alarm = this.alarm.bind(this);
  }
    
  alarm()
  {
    let sound = new Audio("https://www.freespecialeffects.co.uk/soundfx/telephone/ans_phone.wav")
    sound.play();
  }
  
  start()
  {
     if(this.state.clockRun === true)
       return;
    
     this.setState({
      intervalId: setInterval(() => {
        this.handleTimeCount(); 
       }, 1000), 
      clockRun: true, 
    })
  }
  
  stop()
  {
    clearInterval(this.state.intervalId);
    this.setState({clockRun: false});
  }
  
  restart()
  {
    clearInterval(this.state.intervalId);
    this.setState({clockRun: false, session: 25, break: 5, sessionLeft: 25, seconds: 0, label: "SESSION"});
  }
  
  setTime(e)
  {
    if(this.state.clockRun === true)
      return;
    
    let prop = e.currentTarget.parentNode.id;
    let value = parseInt(e.currentTarget.value);
    let currentValue = parseInt(this.state[prop]);
    let newValue = currentValue + value;
    
    if(currentValue === 0 && value === -1)
      newValue = 60;  
    if(currentValue === 60 && value === 1)
      newValue = 0;
    
    if(prop === "session")
      this.setState({[prop]: newValue, sessionLeft: newValue, seconds: 0});
    else
      this.setState({[prop]: newValue, seconds: 0});
  }
 
  handleTimeCount()
  {
    let minutes = this.state.sessionLeft;
    let seconds = this.state.seconds;
    
    if(seconds === 0 && minutes === 0)
    {
      this.alarm();
      this.setState({label: "SESSION", sessionLeft: this.state.session, seconds: 0});
      return;
    }
    
    if(minutes === this.state.break && seconds === 0)
    { 
      this.alarm();
      this.setState({label: "BREAK"});
    }

    if(seconds === 0)
    {
      seconds = 59;
      minutes = minutes - 1;
    }
    else
    {
      seconds = seconds -1;
    }   
    this.setState({sessionLeft: minutes, seconds: seconds});
  }
  
 
  render()
  {
    return(
      <div>
        <div id="timeSetters">
        <TimeSetter id="session" label="SESSION" time={this.state.session} onClick={this.setTime}/>
        <TimeSetter id="break" label="BREAK" time={this.state.break} onClick={this.setTime}/>
        </div> 
    
      <div id="clock">    
        <Display minutes={this.state.sessionLeft} seconds={this.state.seconds} label={this.state.label}/> 
        <OptionPanel start={this.start} stop={this.stop} restart={this.restart}/>
          
      </div>   
     </div>
    )
  }
}

export default PomodoroClock;
