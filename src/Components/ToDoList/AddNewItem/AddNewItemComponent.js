import React from 'react';
import './AddNewItemComponent.scss'
import { ListItemData } from '../ListItemData';

export class AddNewItemComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addItemCallback(new ListItemData(1, "stuff", false));
  }

  render() {
    return (
      <div className="InputContainer">
        <span className="InputPrompt">Enter a new task:</span>
        <input type="text" />
        <button onClick={this.handleClick}>Add</button>
      </div>
    )
  }
}
