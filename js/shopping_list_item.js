class ShoppingListItem {
  constructor(name, description){
    this.name = name;
    this.description = description;
  }

  check() {
    this.is_done = true;
  }

  uncheck() {
    this.is_done = false;
  }

  render() {
    return 'li class ='
  }
}
