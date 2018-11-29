document.addEventListener("DOMContentLoaded", () => {

  const taskList = new TaskList()
  const createNewTaskBotton = document.querySelector('input[type="submit"]')
  const createNewTaskForm = document.querySelector('#create-task-form')
  const taskDiscriptionInput = document.getElementById('new-task-description')
  const containerTodoUlList = document.getElementById('tasks')
  const mainContainer = document.getElementById('main-content')

  submitAddDeleteEditTask = () => {

    // Add EventListener to Submit Button
    createNewTaskForm.addEventListener('submit', function(event) {
      event.preventDefault();
      let newTask = document.createElement("li")
      newTask.innerText = taskDiscriptionInput.value
      containerTodoUlList.append(newTask)

      // Add DELETE Button to Task li
      let deleteButton = document.createElement('button')
      let deleteButtonName = document.createTextNode("X")
      deleteButton.appendChild(deleteButtonName)
      newTask.appendChild(deleteButton)

      // Add EventListener to the DELETE Button to Remove the Task from DOM
      deleteButton.addEventListener('click', function(event) {
        event.target.parentNode.remove()
      })

      //Edit Task
      let editbutton = document.createElement('button')
      let editButtonName = document.createTextNode('Edit')
      editbutton.append(editButtonName)
      newTask.append(editbutton)

      editForm = (TaskValue) => {
        debugger
        let form = document.createElement("form");
        let newInput = document.createElement("input");
        let submitEditFormButton = document.createElement('button')
        let nameforSubmitEditFormButton = document.createTextNode('Update Task')
        let labelForEditFrom = document.createElement('label')
        let textInLabel = document.createTextNode('Enter New Task: ')
        newTask.value=TaskValue;
        newInput.name="TaskValue";
        labelForEditFrom.append(textInLabel)
        form.append(labelForEditFrom)
        form.appendChild(newInput);
        form.append(newInput)
        mainContainer.appendChild(form);
        submitEditFormButton.append(nameforSubmitEditFormButton)
        form.append(submitEditFormButton)
        debugger
        //Add an EventListener for the "Update Edited Task" Button
        submitEditFormButton.addEventListener('click', function(event) {
          event.preventDefault()
          // After New Task is submited Remove form
          form.remove()
        })

      } //EditForm = (TaskValue) ENDS HERE


      //Add EventListener to the Edit Button to Edit the Task in DOM
      editbutton.addEventListener('click',function(event) {

        //Add a New Form to Edit specific Tasks

        //Runs the Edit From
        editForm()

      }) //editbutton.addEventListener('click',function(event) ENDS HERE

      //Reset the createNewTaskForm
      event.target.reset()
    })//createNewTaskForm.addEventListener('submit', function(event) ENDS HERE
  }
  submitAddDeleteEditTask()
});
