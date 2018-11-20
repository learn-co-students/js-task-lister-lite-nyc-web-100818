const newTaskDescription = document.querySelector("#new-task-description");
const createTaskForm = document.querySelector("#create-task-form");
const theList = document.querySelector("#tasks");


createTaskForm.addEventListener("submit", function (event) {
  event.preventDefault()
  const userInput = event.target.querySelector("#new-task-description")
  // console.log(userInput.value)
  const newTask = document.createElement("li");
  const deleteButton = document.createElement("button");
  console.log(deleteButton)
  deleteButton.innerText = "🥴";
  newTask.innerHTML = `${userInput.value}`;
  newTask.append(deleteButton)
  theList.appendChild(newTask);

  deleteButton.addEventListener("click", function (event) {
    console.log(newTask)
    theList.removeChild(newTask)
    // newTask[0].remove()

  })

});