import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
  
  const [personsState, setPersonsState] = useState({
    personas: [
      {name: 'Uriel', age: 24},
      {name: 'Claudio', age: 27},
      {name: 'Wendy', age: 22}
    ]
  });

  const [otherState, setOtherState] = useState({
    otraPropiedad: "Otro valor"
  });

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      personas: [
        {name: 'Alejandro', age: 24},
        {name: 'Claudio', age: 27},
        {name: 'Wendy', age: 18}
      ]
    })
  }

  return (
    <div className="App">
      <h1>React App</h1>
      <p>App component</p>
      <button onClick = {switchNameHandler}>Switch Name</button>
      <Person name={personsState.personas[0].name} age={personsState.personas[0].age}/>
      <Person name={personsState.personas[1].name} age={personsState.personas[1].age}> Ingeniería Industrial </Person>
      <Person name={personsState.personas[2].name} age={personsState.personas[2].age}/>
    </div>
  );
}

export default App;