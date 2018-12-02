document.addEventListener("DOMContentLoaded", () => {

  const taskForm = document.getElementById("create-task-form")
  const taskInput = document.getElementById("new-task-description")
  let taskList = document.getElementById('tasks')


  taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log(taskInput.value);
    taskList.innerHTML += `
    <li id="task-card"> ${taskInput.value}
    <button data-description =${taskInput.value}> X </button></li>`
  })

  taskList.addEventListener('click', (e)=> {
    // console.log(e.target);
    // console.log(e.target.parentElement);
    let task = e.target.parentElement
    task.parentNode.removeChild(task)
    // return false
  })



}); // end of DOMContentLoaded
