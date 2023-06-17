import './GeneralStyling.css';
import './App.css';
import React from 'react'
import HelpMeDialog from './HelpMeDialog.js'

export default class App extends React.Component {
  constructor(props) {
    super(props); //lets you use "this" in the class
    this.state = { 
      dishName: 'No Dish'
    };
  };

  render() {
    return <>
      <div className="App">

        <h1 class="big">{this.state.dishName}</h1>
        
        <hr style={{'width': '800px'}} />

        <hr style={{'width': '800px'}} />

        <HelpMeDialog />
      </div>
    </>
  };
};

