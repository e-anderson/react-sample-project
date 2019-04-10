import React from 'react';
import './ListContainerComponent.scss';
import { ListItemComponent } from '../ListItem/ListItemComponent';
import { ListItemData } from '../ListItemData';
import {AddNewItemComponent} from '../AddNewItem/AddNewItemComponent'

export class ListContainerComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], key: 0 };
    }

    addItem = (item) => {
      item.id = this.state.key;
      var newKey = this.state.key + 1;
      var newArray = this.state.items.concat(item);
      this.setState({items:newArray, key: newKey});
      console.log(this.state.items);
    }

    render() {
      const displayItems = this.state.items.map((item, i) =>
        <ListItemComponent key={item.id} item={item} />
      );
        return ( <div className="ListContainer">
        <AddNewItemComponent addItemCallback={this.addItem}/>
        {displayItems}
        </div>
        );
    }
}
