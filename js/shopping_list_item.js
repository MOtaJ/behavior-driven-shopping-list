class ShoppingListItem {
  constructor(name, description){
    this.name = name;
    this.description = description;
    this.is_done = null;
    this.checkbox = null;
  }

  check() {
    this.is_done = true;
  }

  uncheck() {
    this.is_done = false;
  }

  render() {
<<<<<<< HEAD
    return `<li class='completed_${this.is_done}'><span>${this.name}</span> <span>${this.description}</span> <input class = "check-box" type="checkbox" onchange="changeCheckedStatus"></li>`
=======
    return `<li class='completed_${this.is_done}'><span>${this.name}</span> <span>${this.description}</span><input class = "check-box" type="checkbox" ></li>`

>>>>>>> 32588c363b2a0f67447a013e09f8559af41bb5c4
  }
}


