
document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#create-task-form");
  const taskDiv = document.querySelector("#tasks");

  taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const submitInput = event.target.querySelector("#new-task-description");
    const priorityLevel = event.target.querySelector("Select").value;
    const newTask = document.createElement("li");
    const userName = event.target.querySelector("#new-task-user");
    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");

    newTask.innerText = " user: " + userName.value + " created the task: " + submitInput.value;
    editButton.innerHTML = 'edit';
    editButton.style.margin = "10px";
    deleteButton.innerHTML = `delete`;
    deleteButton.style.margin = "10px";

    if (priorityLevel === "Low") {
      newTask.style.color = "blue";
    }
    else if (priorityLevel === "High") {
      newTask.style.color = "red";
    }

    taskDiv.appendChild(newTask);
    newTask.appendChild(editButton);
    newTask.appendChild(deleteButton);

    deleteButton.addEventListener ('click', function removeRow(event) {
      const myParent = event.target.parentNode;
      myParent.remove();
    })

    editButton.addEventListener('click', function editTask(event) {
      const myParent = event.target.parentNode;
      const editField = document.createElement("input");
      const submitButton = document.createElement("button");
      submitButton.innerHTML = 'Submit Changes';
      submitButton.style.margin = "10px";
      myParent.appendChild(editField);
      myParent.appendChild(submitButton);
      console.log(myParent);

      submitButton.addEventListener('click', function (event) {
        newTask.innerText = " user: " + userName.value + " created the task: " + editField.value;
        newTask.appendChild(editButton);
        newTask.appendChild(deleteButton);
      })
    })

    event.target.reset();

  })
});
/////////// Add the task to a new container
// found the element to append to - THE FORM
// found the container to put stuff in - THE TASK UL
// create a listener for the submit click
// (but first prevent the default post method)
// grab the input value of the form
// create an element for the event listener to fill in with that value
// assign the new element text to the input value
// append the new element as a child to the TASK UL
//
// set a reset method before the closing curly bracket of the eventListener
