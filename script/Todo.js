export class todo {
  constructor(title, description, priority, deadline) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.deadline = deadline;
    this.completed = false;
  }
}
