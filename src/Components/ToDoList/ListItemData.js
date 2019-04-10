import * as moment from 'moment';

export class ListItemData {
  constructor(id, description, completed) {
    this.id = id;
    this.description = description;
    this.completed = completed;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }


}
