
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const taskForm = document.querySelector('#create-task-form')
const taskDiv = document.querySelector('#tasks') // text will appear here
// debugger
taskForm.addEventListener('submit', function (event) {
  event.preventDefault()
  const userTask = event.target.querySelector('#new-task-description')
  const newLiTag = document.createElement('li') // will hold the task once submitted
  // debugger
  newLiTag.innerText = userTask.value // user input string
  taskDiv.appendChild(newLiTag)
   const userPriority = document.getElementById("priority")
  // console.log(userPriority.value)
  // debugger
  newLiTag.style.color = userPriority.value
  // userPriority.addEventListener('click', function(){
  //   console.log(newLiTag)
  //   // debugger
  //   // newLiTag.appendChild(userPriority)
  // })
   const newDelete = document.createElement("button")
  newDelete.innerText = "delete me"
  newLiTag.appendChild(newDelete)
  // NOTE: var btn = document.createElement("BUTTON");
  // document.body.appendChild(btn)
   newDelete.addEventListener('click', function(){
    newLiTag.remove()
   })
  event.target.reset()
 })
// find the element - inside inner html
// do .remove()

});
