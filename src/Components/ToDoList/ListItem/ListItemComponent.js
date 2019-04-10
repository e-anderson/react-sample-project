import React from 'react';
import './ListItemComponent.scss';
import { ListItemData } from '../ListItemData';
import {ListItemToggle} from './ListItemToggle'

const classNames = require('classnames');
export class ListItemComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: this.props.item };
  }

  updateItemCompletedStatus = (toggle) => {
    this.state.item.completed = !toggle;
    var str =  this.state.item.description + " is now " + this.state.item.completed;
    console.log(str);
  }

    render() {
      let obj = (
        <div className="ListItemContainer">
              <ListItemToggle checked={this.state.item.completed} updateItemCallback={this.updateItemCompletedStatus}/>
              <span className="TaskHeading">Task:</span> <span className='TaskDescription'>{this.state.item.description}</span>
        </div>
      );
        return obj;
    }
}
