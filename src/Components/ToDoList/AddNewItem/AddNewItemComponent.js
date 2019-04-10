import React from 'react';
import './AddNewItemComponent.scss'
import { ListItemData } from '../ListItemData';

export class AddNewItemComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputvalue: ''};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addItemCallback(new ListItemData(1, this.state.inputvalue, false));
    this.refs.inputField.value = "";
  }

  updateInputValue = (evt) => {
      this.setState({inputvalue: evt.target.value});
  }

  render() {
    return (
      <div className="InputContainer">
        <span className="InputPrompt">Enter a new task:</span>
        <input ref="inputField" type="text" value={this.state.inputValue} onChange={this.updateInputValue} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    )
  }
}
