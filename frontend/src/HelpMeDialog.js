import './GeneralStyling.css';
import './HelpMeDialog.css';
import React from 'react'

export default class HelpMeDialog extends React.Component {
  constructor(props) {
    super(props); //lets you use "this" in the class
    this.state = { 
      text: ' ',
      hideHelp: false,
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dialog = React.createRef();
  };

  open() {
    this.dialog.current.showModal();
    this.setState(state => ({
      hideHelp: true,
    }));
  };

  close() {
    this.dialog.current.close();
    this.setState(state => ({
      hideHelp: false,
    }));
  }

  handleChange(event) {
    console.log("DEBUG: change")
    this.setState(state => ({
      text: event.target.value
    }));
    event.preventDefault();
  };

  handleSubmit(event) {
    console.log('Submitted ' + this.state.text);
    this.setState(state => ({
      text: ''
    }));
    event.preventDefault();
  }

  render() {
    return <>
      <div onClick={() => this.open()} className={`help shadow ${this.state.hideHelp ? "hide" : ""}`} style={{'text-align': 'center', 'color': 'var(--support2)'}}>
        <p className="medium-text"> Help Me </p>
      </div>

      <dialog ref={this.dialog} onClick={() => this.close()}>
        <div style={{'width': 'min(750px, 75vw)'}}>
          <div style={{'width': '90%', 'height': '250px', 'margin': '0.5rem auto 1rem', 'padding': '10px', 'border': '3px solid black'}}>
            <span className="small-text ai">
              Ask me anything!
            </span>
          </div>
          <form onSubmit={this.handleSubmit} style={{'margin': '0.5rem auto 0.5rem', 'display': 'grid', 'justify-content': 'center'}}>
            <h3>Questions:</h3>
            <label>
              <textarea type="text" value={this.state.text} onChange={this.handleChange} class="box">
                {this.state.text}
              </textarea>
            </label>
            <input type="submit" style={{'width': '100px', 'margin': 'auto', 'text-align': 'center'}}/>
          </form>
        </div>
      </dialog>
    </>
  };
};