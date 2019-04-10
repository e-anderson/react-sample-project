import React from 'react';
import './ListContainerComponent.scss';
import { ListItemComponent } from '../ListItem/ListItemComponent';
import { ListItemData } from '../ListItemData';

export class ListContainerComponent extends React.Component {
    render() {
        return (<div className="App">
        <header className="App-header">
          <img src={this.props.logo} alt="" className="Logo"/>
              <p>My To-Do List</p>
        </header>
        <div className="App-header-divider"></div>
          <ListItemComponent item={new ListItemData(0, 'Pet Dogs', true)}></ListItemComponent>
      </div>);
    }
}
