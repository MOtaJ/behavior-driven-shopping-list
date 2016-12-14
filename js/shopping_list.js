class ShoppingList {
  constructor(items) {
    this.items = []
    this.addItem.bind(this);
  }

  addItem(ShoppingListItem) {
    if(ShoppingListItem) {
      items.push(ShoppingListItem);
    } else {
      return error;
    }
  }

  removeItem(ShoppingListItem) {

  }

}

  /*render(ShoppingListItem) {
    let renderList = '';
    for var(i = 0; i < items.length; i++){
      renderList += items.length.render();
  }
    return `<ul>${renderList}</ul>`*/