import './GeneralStyling.css';
import './InstructionsBox.css';
import React from 'react'
import Task from './Task.js'

export default class InstructionsBox extends React.Component {
  constructor(props) {
    super(props); //lets you use "this" in the class
    this.state = { 
    };
  };

  render() {
    return <>
      <div style={{'width': '100%', 'height': '500px', 'margin-top': '150px', 'background': 'var(--background)', 'position': 'relative'}}>
        <div className="clock-container shadow">
          <img src="clock.png" alt="clock" width="50%" style={{'margin': '15px auto 0px'}}/>
          <br />
          <span style={{'color': 'var(--primary)', 'margin': 'auto'}}>50min</span>
        </div>
        <div style={{'width': '80%', 'margin': 'auto', 'padding': '100px'}}>
          <Task />
        </div>
        
      </div>
    </>
  };
};


