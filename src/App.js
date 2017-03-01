import React, { Component } from 'react';
import logo from './heyho.jpg';
import './App.css';

class App extends Component {
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
      </div>
    );
  }
}

export default App;
