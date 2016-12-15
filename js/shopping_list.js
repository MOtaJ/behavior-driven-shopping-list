"use strict";

class ShoppingList {

  constructor(items){
    this.items = [];
  }

  addItem(items){
    if(this.items instanceof ShoppingListItem){
     this.items.push(item);
    } else {
      throw Error (`${items} does not belong here`);
    }
  }

  removeItem(item){
    if(item instanceof ShoppinglistItem && this.items.index0f(item) > -1){
      this.items.splice(this.items.index0f(item), 1);
    } else if(arguments.length === 0){
      this.items.pop();
    } else {
      throw Error (`this is not an item`);
    }
  }

   render(shoppingListItem) {
    let renderList = '';

    for (let i = 0; i < this.items.length; i++){
      renderList += items.length.render();
    }

    return `<ul>${renderList}</ul>`;

  }

}
