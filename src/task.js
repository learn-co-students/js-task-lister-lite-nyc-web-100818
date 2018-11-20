class Task {

  // constructor() {
  //   const list = document.getElementById('list')
  //   var button = list.querySelector('BUTTON')
  //   console.log(button);
  //   button.addEventListener('click', function(event) {
  //
  //     event.target.parentNode.remove();
  //   })
  // }
  constructor(ul, form) {
    event.preventDefault();
      var userInput = event.target.querySelector('#new-task-description').value
      var liTag = document.createElement('li');
      var colourSelection = event.target.querySelector('#selection').value
      console.log(colourSelection);

      liTag.innerText = userInput;
      liTag.style = `color: ${colourSelection}`

      var btn = document.createElement("BUTTON");
      btn.dataset.description = userInput;

      // this.btn = btn
      // var int = 0
      // btn.id = int;
      // int++;
      var text = document.createTextNode('X');

      btn.appendChild(text);

      ul.appendChild(liTag);
      liTag.appendChild(btn);

      form.reset();

      ul.addEventListener('click', function(event) {
        event.target.parentNode.remove();

      })

  }

  static findButton() {
    var list = document.querySelector('#list')

  }


}
