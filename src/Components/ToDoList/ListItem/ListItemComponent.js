import React from 'react';
import './ListItemComponent.scss';
import { ListItemData } from '../ListItemData';
import {ListItemToggle} from './ListItemToggle'

export class ListItemComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: this.props.item};
  }
    render() {
      let obj = (
        <div className="ListItemContainer">
              <ListItemToggle checked={this.state.item.completed}/>
              <span className="TaskHeading">Task:</span> <span className="TaskDescription">{this.state.item.description}</span>
        </div>
      );
        return obj;
    }
}
