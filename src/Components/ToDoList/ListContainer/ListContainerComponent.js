import React from 'react';
import './ListContainerComponent.scss';
import { ListItemComponent } from '../ListItem/ListItemComponent';
import { ListItemData } from '../ListItemData';

export class ListContainerComponent extends React.Component {
    render() {
      const items = [
        new ListItemData(0, 'Make spaghetti for dinner', false),
        new ListItemData(0, 'Pet Dogs', true),
        new ListItemData(0, 'Take a shower', true)
      ];

      const displayItems = items.map((item) =>
        <ListItemComponent item={item} />
      );
        return ( <div className="ListContainer">
        {displayItems}
        </div>
        );
    }
}
