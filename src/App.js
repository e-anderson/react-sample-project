import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={require('./logo.svg')} alt="" className="Logo"/>
            <p>My To-Do List</p>
        </header>
        <div className="App-header-divider"></div>
        <body>

        </body>
      </div>
    );
  }
}

export default App;
