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

    return `<li class='completed_${this.is_done}'><span>${this.name}</span> <span>${this.description}</span><input class = "check-box" type="checkbox" ><button class='x-button' onclick="removeItemButtonClicked(this.parentElement.getAttribute('data-idx'))">[x]</button></li>`
  }
}


