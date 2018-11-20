document.addEventListener("DOMContentLoaded", () => {
 const taskList = new TaskList();

 const submitForm = document.querySelector('#create-task-form');
 const todoList = document.querySelector('#list');
 const inputForm = document.querySelector('#new-task-description');

 submitForm.addEventListener('submit', function(event) {
   event.preventDefault();

   let tasks = todoList.querySelector('#tasks')

   let taskElement = document.createElement('li')

   let deleteButtonElement = document.createElement('button')
   deleteButtonElement.innerHTML = 'X'

   deleteButtonElement.addEventListener('click', function() {
     taskElement.remove();
   });


   taskElement.innerHTML = inputForm.value;
   tasks.appendChild(taskElement);

   taskElement.appendChild(deleteButtonElement);

 });
});
