import React, { Component } from 'react';
import './App.css';

class ListContainer extends Component {
  render() {
    return (
      <div className="Container-style">
      <ul>
        <li>git gud</li>
        <li>git gud at this</li>
      </ul>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            My To-Do List
        </header>
        <body>
        <ListContainer></ListContainer>
        </body>
      </div>
    );
  }
}

export default App;
