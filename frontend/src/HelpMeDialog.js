import './GeneralStyling.css';
import './HelpMeDialog.css';
import React from 'react'

export default class HelpMeDialog extends React.Component {
  constructor(props) {
    super(props); //lets you use "this" in the class
    this.state = { 
      text: 'filler',
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dialog = React.createRef();
  };

  open() {
    this.dialog.current.showModal();
  };

  close() {
    this.dialog.current.close();
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
      <div onClick={() => this.open()} className="help" style={{'text-align': 'center'}}>
        <p className="medium-text"> Help Me </p>
      </div>
      <dialog ref={this.dialog} onClick={() => this.close()}>
        <div style={{'width': 'min(800px, 80vw)', 'min-height': '250px', 'margin': '1.5rem 0 1.5rem', 'padding': '10px', 'background': 'white', 'border': '5px solid var(--primary)'}}>
          <span className="small-text ai">
            Ask me anything!
          </span>
        </div>
        <form onSubmit={this.handleSubmit} style={{'margin': '50px auto 50px', 'display': 'grid'}}>
          <h3>Input:</h3>
          <label>
            <textarea type="text" value={this.state.text} onChange={this.handleChange} class="box">
              {this.state.text}
            </textarea>
          </label>
          <input type="submit" style={{'width': '100px', 'margin': 'auto', 'text-align': 'center'}}/>
        </form>
      </dialog>
    </>
  };
};