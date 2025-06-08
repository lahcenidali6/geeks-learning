export default class TodoList {
  constructor() {
    this.tasks = [];
  }
  add(description) {
    const task = {
      id: this.tasks.length + 1,
      description,
      completed: false,
    };
    this.tasks.push(task);
  }
  completeTask(id) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.completed = true;
    }
  }
}
