import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <p>App component</p>
        <Person name="Uriel" age="24"/>
        <Person name="Claudio" age="27"> Ingeniería Industrial </Person>
        <Person name="Wendy" age="22"/>
      </div>
    );
  }
}

export default App;
