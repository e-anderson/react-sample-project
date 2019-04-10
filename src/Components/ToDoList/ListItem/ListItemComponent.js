import React from 'react';
import './ListItemComponent.scss';

export class ListItemComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: { id:0, description:'Pet dogs', completed:false}};
  }
    render() {
        return <p>Task: {this.state.item.description}, {this.state.item.completed ? 'Done!' : 'Not Done'}</p>
    }
}
