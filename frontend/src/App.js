import './App.css';
// object orientated below:
import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      testCounter: 0,
      text: 'Filler',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  testCounterIncrement() {
    // console.log("DEBUG: testCounterIncrement")
    this.setState(state => ({
      testCounter: state.testCounter + 1
    }));
  };

  handleChange(event) {
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
      <div className="App">
        <h1>Hello World!</h1>
        <form onSubmit={this.handleSubmit} style={{'margin': '50px'}}>
          <label>
            Name:
            <input type="text" value={this.state.text} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button onClick={() => this.testCounterIncrement()}>Click to Fetch!</button>
        <h2>{this.state.testCounter}</h2>
      </div>
    </>
  };
};


// functional below
// function App() {
//   return (
//     <div className="App">
//      <h1>Hello World!</h1>
//      <button>Click to Fetch!</button>
//     </div>
//   );
// }

// export default App;

