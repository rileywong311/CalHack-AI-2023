import './GeneralStyling.css';
import './ExpandMenu.css';
import React from 'react'

export default class ExpandMenu extends React.Component {
  constructor(props) {
    super(props); //lets you use "this" in the class
    this.state = { 
      text: 'filler',
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  };

  open() {
    // this.dialog.current.showModal();
  };

  close() {
    // this.dialog.current.close();
  }

  render() {
    return <>
      <div onClick={() => this.open()} className="folder">
        <span class="small-text"> {this.props.name} </span>
        <span>
          <svg width="30" height="30" style={{'display': 'float', 'float': 'right'}}>
            <line x1="15" y1="5" x2="15" y2="25" style={{'stroke': 'black', 'stroke-width': '3'}}></line>
            <line x1="5" y1="15" x2="25" y2="15" style={{'stroke': 'black', 'stroke-width': '3'}}></line>
          </svg>
        </span>
      </div>
    </>
  };
};