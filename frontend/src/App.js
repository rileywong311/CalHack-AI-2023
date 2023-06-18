import './GeneralStyling.css';
import './App.css';
import React from 'react'
import HelpMeDialog from './HelpMeDialog.js'
import ExpandMenu from './ExpandMenu.js'


export default class App extends React.Component {
  constructor(props) {
    super(props); //lets you use "this" in the class
    this.state = { 
      dishName: 'No Dish',
      totalTime: '50min',
      prepTime: '25min'
    };
  };

  render() {
    return <>
      <div className="main">
        <div style={{'width': 'min(700px, 80vw)'}}>
          <span class="big-text">{this.state.dishName}</span>
        </div>
        {/* <hr style={{'width': '100%', 'margin': '25px 0 25px'}} /> */}
        <div style={{'width': 'min(700px, 80vw)'}}>
          <ExpandMenu name="Overview:" />
          <ExpandMenu name="Ingredients:" />
        </div>
        {/* <hr style={{'width': '100%', 'margin': '25px 0 25px'}} /> */}
      </div>
      <div className="main">
        {/* <div style={{'width': 'min(750px, 90vw)', 'margin': '25px 0 0', 'padding': '25px', 'background': 'var(--secondary)'}}>
          ⚠️ Notice: 
        </div> */}
        <div style={{'width': 'min(850px, 80vw)', 'height': '500px', 'margin': '25px 0 25px', 'padding': '25px', 'background': 'var(--primary)'}}>
    
        </div>
      </div>
      <div className="main" style={{'margin-bottom': '100px'}}>
        <hr style={{'width': '100%', 'margin': '25px 0 25px'}} />
        <div style={{'display': 'flex', 'flex-wrap': 'wrap', 'gap': '1rem', 'margin': '15px'}}>
          <span style={{'background': 'var(--secondary)', 'border-radius': '999px', 'padding': '0.75rem 1rem 0.75rem'}}>
            Total Time: <strong>{this.state.totalTime}</strong>
          </span>
          <span style={{'background': 'var(--secondary)', 'border-radius': '999px', 'padding': '0.75rem 1rem 0.75rem'}}>
            Prep Time: <strong>{this.state.prepTime}</strong>
          </span>
        </div>
      </div>
      <div style={{'width': '100%', 'padding-bottom': '20px', 'position': 'fixed', 'bottom': '0'}}>
        <HelpMeDialog />
      </div>
    </>
  };
};

