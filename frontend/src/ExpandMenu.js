import './GeneralStyling.css';
import './ExpandMenu.css';
import React from 'react'

export default class ExpandMenu extends React.Component {
  constructor(props) {
    super(props); //lets you use "this" in the class
    this.state = { 
      expanded: false,
    };

    this.toggle = this.toggle.bind(this);
  };

  toggle() {
    this.setState(state => ({
      expanded: !this.state.expanded
    }));
  };


  render() {
    return <>
      <div onClick={() => this.toggle()} className={`folder human ${this.state.expanded ? "open" : ""}`}>
        <span class="small-text"> {this.props.name} </span>
        <span>
          <svg width="30" height="30" style={{'display': 'float', 'float': 'right'}}>
            <line x1="15" y1="5" x2="15" y2="25" className={`folder ${this.state.expanded ? "hidden" : ""}`} />
            <line x1="5" y1="15" x2="25" y2="15" />
          </svg>
        </span>
      </div>
      <div>
        {this.state.expanded &&
          <p>contents</p>
        }
      </div>
    </>
  };
};