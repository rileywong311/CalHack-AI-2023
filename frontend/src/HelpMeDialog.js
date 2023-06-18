import './GeneralStyling.css';
import './HelpMeDialog.css';
import React from 'react'

export default class HelpMeDialog extends React.Component {
  constructor(props) {
    super(props); //lets you use "this" in the class
    this.state = { 
      text: ' ',
      hideHelp: false,
      response: 'Ask me anything!'
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
    // console.log("DEBUG: change")
    this.setState(state => ({
      text: event.target.value
    }));
    event.preventDefault();
  };

  handleSubmit(event) {
    const requestBody = { id: 0, question: this.state.text }

    fetch('http://localhost:3001/api/explain', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    })
      .then(response => response.json())
      .then(data => {
        this.setState({response: data.content})
      })

    // console.log('Submitted ' + this.state.text);
    this.setState(state => ({
      text: '',
    }));
    // this.close();
    event.preventDefault();
  }

  render() {
    return <>
      <div onClick={() => this.open()} className={`help shadow ${this.state.hideHelp ? "hide" : ""}`} style={{'text-align': 'center', 'color': 'var(--support2)'}}>
        <span style={{'font-size': '1.5rem'}}> Help Me </span>
      </div>

      <dialog ref={this.dialog}>
        <div style={{'width': 'min(750px, 75vw)', 'position': 'relative'}}>
          <div className="close" >
            <button onClick={() => this.close()} style={{'width':'60px'}}>close</button>
          </div>

          
          <img src="Logo.png" alt="logo" style={{'width': '50px', 'border-radius': '999px'}} />

          <div style={{'width': '90%', 'height': '200px', 'margin': '0.5rem auto 1rem', 'padding': '10px', 'border': '3px solid black'}}>
            <span className="small-text ai">
              {this.state.response}
            </span>
          </div>
          <form style={{'margin': '0.5rem auto 0.5rem', 'display': 'grid', 'justify-content': 'center'}}>
            <h3>Questions:</h3>
            <label>
              <textarea type="text" value={this.state.text} onChange={this.handleChange} class="box">
                {this.state.text}
              </textarea>
            </label>
            <button onClick={this.handleSubmit} style={{'width':'100px', 'margin': '10px auto'}}>Submit</button>
          </form>
        </div>
      </dialog>
    </>
  };
};