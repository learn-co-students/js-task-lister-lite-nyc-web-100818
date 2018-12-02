// TaskLister Lite

document.addEventListener("DOMContentLoaded", function() {
  // *************DOM Elements*******************
  const newTaskDescription = document.querySelector("#new-task-description");
  const newTaskForm = document.querySelector("#create-task-form");
  const taskUl = document.querySelector("#tasks");
  // *************Function Invocations****************
  newTask();
  // deleteTask();
  // *****************FUNCTIONS******************

  function newTask() {
    newTaskForm.addEventListener("submit", event => {
      console.log("here!");
      event.preventDefault();
      const userInput = newTaskDescription.value;
      if (userInput === "") {
        alert("Please describe your task");
      } else {
        const newTaskLi = document.createElement("li");
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = `<data-action="delete"> x`;
        newTaskLi.innerHTML = userInput;
        newTaskLi.append(deleteButton);
        taskUl.appendChild(newTaskLi);
        event.target.reset();
      }
    });
  }

  // function deleteTask() {
  //   taskUl.addEventListener("click", event => {
  //     console.log(event.target);
  //     if (event.target.dataset.action === "delete") {
  //       taskUl.removeChild();
  //     }
  //   });
  // }
});

// Helper Functions
