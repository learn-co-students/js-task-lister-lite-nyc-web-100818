class TaskList {

  constructor() {
    const form = document.getElementById('create-task-form');
    const main = document.getElementById('list');

    const ulTag = document.createElement('ul');
    const ul = main.appendChild(ulTag);
    // var taskCall = new Task();
    //
    form.addEventListener('submit', function(event) {
      var taskCall = new Task(ul, form);

      Task.findButton()
      

     });



     // var findButton = document.






  }



}
