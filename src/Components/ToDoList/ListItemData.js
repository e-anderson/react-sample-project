import * as moment from 'moment';

export class ListItemData {
  constructor(id, description, completed) {
    this.id = id;
    this.addedDate = addedDate;
    this.dueDate = dueDate;
    this.completedDate = completedDate;
    this.description = description;
    this.completed = completed;
    this.category = category;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }


}
