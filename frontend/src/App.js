import './GeneralStyling.css';
import './App.css';
import React from 'react'
import HelpMeDialog from './HelpMeDialog.js'
import ExpandMenu from './ExpandMenu.js'
import InstructionsBox from './InstructionsBox.js'

export default class App extends React.Component {
  constructor(props) {
    super(props); //lets you use "this" in the class
    this.state = { 
      loaded: false,
      loadData: '',
      dishName: '<No Dish>',
      totalTime: '50min',
      prepTime: '25min'
    };

    this.handleDataChange = this.handleDataChange.bind(this);
  };

  load() {
    console.log(this.state.loadData)
    this.setState(state => ({
      loaded: true
    }));
  }

  handleDataChange(event) {
    this.setState(state => ({
      loadData: event.target.value
    }));
    event.preventDefault();
  }

  render() {
    // this could be routered maybe
    if (!this.state.loaded) {
      return <>
        <div className="grid" style={{'margin': '50px'}}>
          <span className="big-text human">Pick a dish:</span>
          <form style={{'margin': '50px auto 50px', 'display': 'grid'}}>
            <h3>Input:</h3>
            <label>
              <textarea type="text" value={this.state.loadData} onChange={this.handleDataChange} class="box">
                {this.state.text}
              </textarea>
            </label>
            {/* <input type="submit" style={{'width': '100px', 'margin': 'auto', 'text-align': 'center'}}/> */}
          </form>
          <button onClick={() => this.load()}>Pick</button>
        </div>
      </>
    }
    else {
      return <>
        <div className="grid">
          <div style={{'width': 'min(700px, 80vw)', 'margin-top': '50px'}}>
            <span className="ai" style={{'font-size': '2rem'}}> Digital Cuisine Presents:</span>
            <br />
            <span className="big-text human">{this.state.dishName}</span>
          </div>
          <div style={{'width': 'min(700px, 80vw)'}}>
            <ExpandMenu name="Overview:" />
            <ExpandMenu name="Ingredients:" />
          </div>
        </div>

        <InstructionsBox />

        {/* <div className="grid human" style={{'margin-bottom': '100px'}}>
          <div style={{'display': 'flex', 'flex-wrap': 'wrap', 'gap': '1rem', 'margin': '15px'}}>
            <span style={{'background': 'var(--secondary)', 'border-radius': '999px', 'padding': '0.75rem 1rem 0.75rem'}}>
              Total Time: &nbsp; <span className="ai">{this.state.totalTime}</span>
            </span>
            <span style={{'background': 'var(--secondary)', 'border-radius': '999px', 'padding': '0.75rem 1rem 0.75rem'}}>
              Prep Time: &nbsp; <span className="ai">{this.state.prepTime}</span>
            </span>
          </div>
        </div> */}
        <div style={{'width': '100%', 'padding-bottom': '20px', 'position': 'fixed', 'bottom': '0'}}>
          <HelpMeDialog />
        </div>
      </>
    }
  };
};

