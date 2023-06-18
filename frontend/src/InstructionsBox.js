import './GeneralStyling.css';
import React from 'react'


export default class Instructionbox extends React.Component {
  constructor(props) {
    super(props); //lets you use "this" in the class
    this.state = { 
    };
  };


  render() {
    return <>
      <div style={{'width': 'min(850px, 80vw)', 'height': '500px', 'margin': '25px 0 25px', 'padding': '25px', 'background': 'var(--primary)'}}>
      
      </div>
    </>
  };
};


