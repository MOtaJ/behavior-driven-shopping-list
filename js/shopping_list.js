<<<<<<< HEAD
class Shoppinglist {

  constructor(items){
    this.items = [];
  }

  addItem(items){
    if(items instanceof ShoppingListItem){
     this.items.push(item);
    } else {
      throw Error (`${items} does not belong here`);
    }
  }

  removeItem(){
    if(items instanceof ShoppinglistItem && this.items.index0f(items) > -1){
      this.items.splice(this.items.index0f(item), 1);
    } else if(arguments.length === 0){
      this.items.pop();
    } else {
      throw Error (`this is not an item`);
    }
  }
}
=======
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
>>>>>>> 1082e6c601a2aeb1af47c5e97f06993ac77db29a
