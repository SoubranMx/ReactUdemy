import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    /* return (
      <div className="App">
        <h1>Hola, esto es un H1 desde React</h1>
      </div>
    ); */

    return React.createElement("div", {className: 'App'}, React.createElement("h1", null, "Forma larga de componente :c"));

  }
}

export default App;
