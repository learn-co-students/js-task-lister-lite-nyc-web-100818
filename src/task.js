class Task {
  constructor(description, importance) {
    this.description = description
    this.importance = importance
    this.displayMode = 'view'
  }

  render() {
    return `<li style="color:${this.importance}">
              ${this.description}
              <button data-action='edit' data-description="${this.description}">Edit</button>
              <button data-action='delete' data-description="${this.description}">Delete</button>
            </li>`
  }
}
