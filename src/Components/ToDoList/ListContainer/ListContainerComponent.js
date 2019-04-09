import React from 'react';
import './ListContainerComponent.scss';
import { ListItemComponent } from '../ListItem/ListItemComponent';

export class ListContainerComponent extends React.Component {
    render() {
        return (<div className="App">
        <header className="App-header">
        <img src={this.props.logo} alt="" className="Logo"/>
            <p>My To-Do List</p>
        </header>
        <div className="App-header-divider"></div>
          <ListItemComponent></ListItemComponent>
      </div>);
    }
}