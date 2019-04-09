import React, { Component } from 'react';
import './App.scss';
import { ListContainerComponent } from './Components/ToDoList/ListContainer/ListContainerComponent.js';

class App extends Component {
  render() {
    return (
     <ListContainerComponent logo={require('./logo.svg')}/>
    );
  }
}

export default App;
