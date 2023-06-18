import './GeneralStyling.css';
import './App.css';
import React from 'react'
import HelpMeDialog from './HelpMeDialog.js'
import ExpandMenu from './ExpandMenu.js'
import Task from './Task.js'

export default class App extends React.Component {
  constructor(props) {
    super(props); //lets you use "this" in the class
    this.state = { 
      // load page
      loaded: false,
      loadRecipeData: '',

      // recipe page
      dishName: '<No Dish>',
      totalTime: '50min',
      steps: [
        {step: -1, directions: ''}
      ]
    };

    this.handleRecipeDataChange = this.handleRecipeDataChange.bind(this);
    this.loadSteps = this.loadSteps.bind(this);
  };

  loadRecipe() {
    // console.log(this.state.loadRecipeData)
    this.setState(state => ({
      loaded: true
    }));

    // .fetch
  }

  handleRecipeDataChange(event) {
    this.setState(state => ({
      loadRecipeData: event.target.value
    }));
    event.preventDefault();
  }

  loadSteps() {
    let content = [];
    for (let i = 0; i < this.state.steps.length; i++) {
      const step = step[i];
      content.push(<Task key={step.step}>{step.directions}</Task>);
    }
    return content;
  };

  render() {
    // this could be routered maybe
    if (!this.state.loaded) {
      return <>
        <div className="grid" style={{'margin': '50px'}}>
          <span className="big-text human">Pick a dish:</span>
          <form style={{'margin': '50px auto 50px', 'display': 'grid'}}>
            <h3>Give me a recipe!</h3>
            <label>
              <textarea type="text" value={this.state.loadRecipeData} onChange={this.handleRecipeDataChange} class="box">
                {this.state.text}
              </textarea>
            </label>
            {/* <input type="submit" style={{'width': '100px', 'margin': 'auto', 'text-align': 'center'}}/> */}
          </form>
          <button onClick={() => this.loadRecipe()}>Pick</button>
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
          {/* <div style={{'width': 'min(700px, 80vw)'}}>
            <ExpandMenu name="Overview:" />
            <ExpandMenu name="Ingredients:" />
          </div> */}
        </div>

        <div style={{'width': '100%', 'margin-top': '150px', 'background': 'var(--background)', 'position': 'relative'}}>
          <div className="clock-container shadow">
            <img src="clock.png" alt="clock" width="50%" style={{'margin': '15px auto 0px'}}/>
            <br />
            <span style={{'color': 'var(--primary)', 'margin': 'auto'}}>50min</span>
          </div>
          <div style={{'width': '80%', 'margin': 'auto', 'text-align': 'center', 'padding-top': '100px'}}>
            <Task completed ="true" first="true" />
            <Task completed ="true"/>
            <Task current="true" />
            <Task />
            <Task />
            <Task last="false" />
          </div>
        </div>
        
        <div style={{'width': '100%', 'padding-bottom': '20px', 'position': 'fixed', 'bottom': '0'}}>
          <HelpMeDialog />
        </div>
        
        <div style={{'height': '100px'}}></div>
      </>
    }
  };
};

