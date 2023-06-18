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
      loading: false,
      loaded: false,
      loadRecipeData: '',

      // recipe page
      dishName: '<No Dish>',
      totalTime: '50min',
      // currentStep: -1,
      steps: [
        {time: 1, description: '1'},
        {time: 2, description: '2'},
        {time: 3, description: '3'}
      ]
    };

    this.handleRecipeDataChange = this.handleRecipeDataChange.bind(this);
    this.loadSteps = this.loadSteps.bind(this);
  };

  loadRecipe() {
    const requestBody = { food: this.state.loadRecipeData };
    this.setState(state => ({
      loading: true,
    }));

    fetch('http://localhost:3001/api/steps', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    })
      .then(response => response.json())
      .then(data => {
        const { name, steps } = data;
        const totalTime = steps.reduce((accumlator, step) => accumlator + Number(step.time), 0);
        console.log(totalTime);
        this.setState({ dishName: name, steps, totalTime: `${totalTime} Min`, loaded: true });
    })
  }

  handleRecipeDataChange(event) {
    this.setState(state => ({
      loadRecipeData: event.target.value
    }));
    event.preventDefault();
  }

  loadSteps() {
    return (
      <>
        {this.state.steps.map((step, i)=> (
          <Task step={i+1} directions={step.description} first={i === 0} last={i === this.state.steps.length-1} />
        ))}
      </>
    );
  };

  render() {
    // this could be routered maybe

    const data = this.loadSteps();

    if (!this.state.loaded) {
      return <>
        <div className="grid" style={{'margin': '50px'}}>
          { !this.state.loading && 
          <>
            <span className="big-text human">Pick a dish:</span>
            <form style={{'margin': '50px auto 50px', 'display': 'grid'}}>
              <h3>Give me a recipe!</h3>
              <label>
                <textarea type="text" value={this.state.loadRecipeData} onChange={this.handleRecipeDataChange} class="box">
                  {this.state.text}
                </textarea>
              </label>
            </form>
            <button onClick={() => this.loadRecipe()}>Go!</button>
          </>
          }
          { this.state.loading && 
          <>
            <img src="logo.png" alt="logo" className="loading-logo"/>
            <br />
            <h1 className="loading-dots">Thinking</h1>
          </>
          }

        </div>
      </>
    }
    else {
      return <>
        <div className="grid">
          <div style={{'width': 'min(700px, 80vw)', 'margin-top': '50px'}}>
            <span className="ai" style={{'font-size': '2rem'}}> Gourm.ai presents:</span>
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
            <span style={{'color': 'var(--primary)', 'margin': 'auto'}}>{this.state.totalTime}</span>
          </div>
          <div style={{'width': '80%', 'margin': 'auto', 'text-align': 'center', 'padding-top': '100px'}}>
            {/* <Task completed ="true" first="true" />
            <Task completed ="true"/>
            <Task current="true" />
            <Task />
            <Task />
            <Task last="false" /> */}
            {data}
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

