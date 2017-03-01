import React, { Component } from 'react';
import logo from './heyho.jpg';
import './App.css';
import SSGMap from './map.js';

class App extends Component {
    componentDidUpdate() {
        console.log(this.state, "uppdate");
    }
    componentDidMount () {
        console.log("cdm", this.state);
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Let's Go No-Go</h2>
        </div>
        <p className="App-intro">
            Fancy copy.
        </p>
        <div><SSGMap />
            </div>
      </div>
    );
  }
}

export default App;
