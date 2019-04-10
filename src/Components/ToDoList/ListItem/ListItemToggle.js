import React from 'react';
import './ListItemComponent.scss';

export class ListItemToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: this.props.checked };
    this.handleClick = this.handleClick.bind(this);
  }

  toggleChecked() {
    this.setState({ checked: !this.state.checked });
    this.props.updateItemCallback(this.state.checked);
  }

  handleClick() {
    this.toggleChecked();
  }

  render() {
    let obj = (
      <div className="Box" onClick={this.handleClick}><img src={this.state.checked ? require('./box_checked.png') : require('./box_unchecked.png')}/></div>
    );
      return obj;
  }
}
