import './GeneralStyling.css';
import './Task.css';
import React from 'react'


export default class Task extends React.Component {
  constructor(props) {
    super(props); //lets you use "this" in the class
    this.state = { 
    };
  };


  render() {
    return <>
      <div className="task-grid">
        <span className="completion">
          What
        </span>
        <span className="shadow directions">
          Hello
        </span>
        <span className="next">
          Bruh
        </span>
      </div>
    </>
  };
};
