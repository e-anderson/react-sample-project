import React, { Component } from 'react';
import './App.scss';
import { ListContainerComponent } from './Components/ToDoList/ListContainer/ListContainerComponent.js';

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={require('./logo.svg')} alt="" className="Logo"/>
              <p>My To-Do List</p>
        </header>
        <div className="App-header-divider"></div>
          <div className="ListContent">
          <ListContainerComponent />
          </div>
        </div>
    );
  }
}

export default App;
