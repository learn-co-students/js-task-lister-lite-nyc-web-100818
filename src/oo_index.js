
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const formElement = document.querySelector('#create-task-form');
  const taskListElement = document.querySelector('#tasks');

  formElement.addEventListener('submit', function(event){
    event.preventDefault();
    const inputElement = event.target.querySelector('#new-task-description');
    const inputImportance = event.target.querySelector('#new-task-importance');
    const newTaskElement = document.createElement('li');





    // const task = new Task(inputElement.value);

    // newTaskElement.innerText = inputElement.value;
    newTaskElement.style.color = inputImportance.value;
    // console.log(inputImportance)
    //
    // taskListElement.appendChild(newTaskElement);
    // newTaskElement.appendChild(deleteButton);

    const currentTask = createShowView(inputElement.value);
    const currentTaskForm = createFormView(inputElement.value);
    newTaskElement.appendChild(currentTask);
    taskListElement.appendChild(newTaskElement);


    // add an edit button


    // when the edit button is clicked, show a form with an input field and submit

    // when the new form is submitted

    // get the value from the form

    // change the element text to show new text

    // delete the form


  });

  function createDeleteButton(){
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function(event){
      event.target.parentElement.parentElement.remove();
    });
    return deleteButton;
  }

  function createEditButton(){
    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    return editButton;
  }

  function createShowView(text){
    const taskSpan = document.createElement('span');
    taskSpan.innerText = text;

    const editButton = createEditButton();
    editButton.addEventListener('click', function(event){
      const editView = createFormView(text);

      const div = event.target.parentElement
      event.target.parentElement.parentElement.appendChild(editView)
      div.remove()
    });

    const deleteButton = createDeleteButton();

    const taskDiv = document.createElement('div');
    taskDiv.appendChild(taskSpan)
    taskDiv.appendChild(deleteButton)
    taskDiv.appendChild(editButton);
    return taskDiv;
  }

  function createFormView(text){
    const taskInput = document.createElement('input');
    taskInput.value = text;
    taskInput.type = 'text';

    const saveButton = createSaveButton();
    saveButton.addEventListener('click', function(event){
      const editInput = event.target.parentElement.querySelector('input')
      const showView = createShowView(editInput.value);

      const div = event.target.parentElement
      event.target.parentElement.parentElement.appendChild(showView)
      div.remove()
    });

    const taskDiv = document.createElement('div');
    taskDiv.appendChild(taskInput);
    taskDiv.appendChild(saveButton);

    return taskDiv;
  }

  function createSaveButton(){
    const saveButton = document.createElement('button');
    saveButton.innerText = 'Save';
    return saveButton;
  }


});
