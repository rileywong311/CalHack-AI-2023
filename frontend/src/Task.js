import './GeneralStyling.css';
import './Task.css';
import React from 'react'


export default class Task extends React.Component {
  constructor(props) {
    super(props); //lets you use "this" in the class
    this.state = { 
      completed: false,
    };
  };

  toggleComplete() {
    this.setState(state => ({
      completed: !this.state.completed
    }));
  }

  render() {
    return <>
      <div className="task-grid" onClick={() => this.toggleComplete()}>
        <span className="completion">
          <svg width="30px" height="100%">
            { !this.props.first && <line x1="50%" y1="0" x2="50%" y2="50%" ></line> }
            { !this.props.last && <line x1="50%" y1="50%" x2="50%" y2="100%" ></line> }
            <circle className={`${this.state.completed ? "completed" : ""}`} r="10px" cx="50%" cy="50%"></circle>
          </svg>
        </span>
        <span className={`shadow directions ${this.state.completed ? "completed" : ""}`}>
          H
        </span>
        <span className="next">
          { this.props.current &&
            <div className="shadow" style={{'width': '25px', 'height': '25px', 'border-radius': '999px', 'background': 'var(--primary)', 'display': 'grid', 'align-items': 'center'}}>
              <span style={{'font-size': '12.5px'}}>▼</span>
            </div>
          }
        </span>
      </div>
    </>
  };
};
