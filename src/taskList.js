class TaskList {
  constructor() {
    this.tasks = []
  }

  findTask(description) {
    return this.tasks.find(task => task.description === description)
  }

  findTaskIndex(description) {
    return this.tasks.findIndex(task => task.description === description)
  }

  render() {
    return this.tasks.map(task => task.render()).join("")
  }
}
