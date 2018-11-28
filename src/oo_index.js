
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList()

  const formElement = document.querySelector('#create-task-form')
  const taskListElement = document.querySelector('#tasks')

  formElement.addEventListener('submit', event => {
    event.preventDefault()
    const description = event.target.querySelector('#new-task-description').value
    const importance = event.target.querySelector('#new-task-importance').value
    if (event.target.dataset.action === 'create') {
      const task = new Task(description, importance) // add a new task
      taskList.tasks.push(task)
    } else {
      const task = taskList.findTask(event.target.dataset.description)
      task.description = description
      task.importance = importance
      // reset the form to create mode
      formElement.querySelector('input[type="submit"]').value = 'Create New Task'
      event.target.dataset.action = 'create'
      event.target.dataset.description = ''
      event.target.reset()
    }
    event.target.reset()
    rerender()
  })

  tasks.addEventListener('click', event => {
    if (event.target.dataset.action === 'edit') {
      const taskDescription = event.target.dataset.description
      const task = taskList.findTask(taskDescription)
      // copy form data & change create form to edit form
      formElement.dataset.action = 'edit'
      formElement.dataset.description = task.description // identifier for form
      formElement.querySelector('input[name="new-task-description"]').value = task.description
      formElement.querySelector('select[name="new-task-importance"]').value = task.importance
      formElement.querySelector('input[type="submit"]').value = 'Save Task'
    } else if (event.target.dataset.action === 'delete') {
      const taskDescription = event.target.dataset.description
      const taskIndex = taskList.findTaskIndex(taskDescription)
      taskList.tasks.splice(taskIndex, 1)
      rerender()
    }
  })

  const rerender = () => {
    taskListElement.innerHTML = taskList.render() //re-render the tasklist
  }

});
