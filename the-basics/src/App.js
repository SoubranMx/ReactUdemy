import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    personas: [
      {name: 'Uriel', age: 24},
      {name: 'Claudio', age: 27},
      {name: 'Wendy', age: 22}
    ]
  };


  switchNameHandler = () => {
    //console.log('Presionaste el botón!');
    // NO ESCRIBAS this.state.personas[0].name = 'Alejandro'
    this.setState({
      personas: [
        {name: 'Alejandro', age: 24},
        {name: 'Claudio', age: 27},
        {name: 'Wendy', age: 18}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <p>App component</p>
        <button onClick = {this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.personas[0].name} age={this.state.personas[0].age}/>
        <Person name={this.state.personas[1].name} age={this.state.personas[1].age}> Ingeniería Industrial </Person>
        <Person name={this.state.personas[2].name} age={this.state.personas[2].age}/>
      </div>
    );
  }
}

export default App;
