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
  }

  deleteItem =() => {
    this.props.onDeleteButtonClicked(this.state.item);
  }

    render() {
      let obj = (
        <div className="ListItemContainer">
              <ListItemToggle checked={this.state.item.completed} updateItemCallback={this.updateItemCompletedStatus}/>
              <span className="TaskHeading">Task:</span> <span className='TaskDescription'>{this.state.item.description}</span>
              <span><img src={require('./delete-icon.png')} className="DeleteButton" onClick={this.deleteItem}/></span>
        </div>
      );
        return obj;
    }
}
