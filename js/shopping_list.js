class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem(ShoppingListItem) {
    if(ShoppingListItem instanceof ShoppingListItem) {
      this.items.push(ShoppingListItem)
    } else {
      throw error ('Not a shopping list item');
    }
  }

  removeItem(ShoppingListItem) {
    if(this.items.indexOf(ShoppingListItem) > -1) {
      this.items.splice(this.items.indexOf(ShoppingListItem, 1))
    } else {
      throw error ('There is no Shopping List Item to remove')
    }
  }

  render() {
    let renderList = ' ';
    for (i = 0; i < this.items.length; i++){
      renderList += this.items[i].render();
  }
    return `<ul>${renderList}</ul>`;

  }

}