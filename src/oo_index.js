document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
});

const taskForm = document.getElementById('create-task-form')

const submitFunction = function() {
  taskForm.addEventListener('submit', function(event) {
    event.preventDefault()
    const description = document.getElementById('new-task-description').value
    console.log(`${description}`)
    const tasks = document.getElementById('tasks')
    console.log(`%c${tasks}`, 'color: cyan')

    const li = document.createElement("LI")
    li.appendChild(document.createTextNode(`${description}`))
    tasks.appendChild(li)

    taskForm.reset()

    const button = document.createElement("BUTTON")
    button.appendChild(document.createTextNode(`X`))
    li.appendChild(button)

    button.addEventListener('click', function(event) {
    console.log(button.parentElement)
    button.parentElement.remove()
    })
  })
}

submitFunction()
