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
      dishName: '<No Dish>',
      totalTime: '50min',
      prepTime: '25min'
    };
  };

  load() {
    this.setState(state => ({
      loaded: true
    }));
  }

  render() {
    if (!this.state.loaded) {
      return <>
        <div className="grid" style={{'margin': '50px'}}>
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
          <hr style={{'width': '100%', 'margin': '25px 0 25px'}} />
          <div style={{'width': 'min(700px, 80vw)'}}>
            <ExpandMenu name="Overview:" />
            <ExpandMenu name="Ingredients:" />
          </div>
          <hr style={{'width': '100%', 'margin': '25px 0 25px'}} />
        </div>
        <div className="grid human">
          {/* <div style={{'width': 'min(750px, 90vw)', 'margin': '25px 0 0', 'padding': '25px', 'background': 'var(--secondary)'}}>
            ⚠️ Notice: 
          </div> */}
          <InstructionsBox />
        </div>
        <div className="grid human" style={{'margin-bottom': '100px'}}>
          {/* <hr style={{'width': '100%', 'margin': '25px 0 25px'}} /> */}
          <div style={{'display': 'flex', 'flex-wrap': 'wrap', 'gap': '1rem', 'margin': '15px'}}>
            <span style={{'background': 'var(--secondary)', 'border-radius': '999px', 'padding': '0.75rem 1rem 0.75rem'}}>
              Total Time: &nbsp; <span className="ai">{this.state.totalTime}</span>
            </span>
            <span style={{'background': 'var(--secondary)', 'border-radius': '999px', 'padding': '0.75rem 1rem 0.75rem'}}>
              Prep Time: &nbsp; <span className="ai">{this.state.prepTime}</span>
            </span>
          </div>
        </div>
        <div style={{'width': '100%', 'padding-bottom': '20px', 'position': 'fixed', 'bottom': '0'}}>
          <HelpMeDialog />
        </div>
      </>
    }
  };
};

