"use strict";

class ShoppingList {
  constructor(items){
    this.items = [];
  }

  addItem(item){
    if(item instanceof ShoppingListItem){
     this.items.push(item);
    } else {
      throw Error (`${items} does not belong here`);
    }
  }

  removeItem(item){
    if(this.items.indexOf(item) > -1){
      this.items.splice(this.items.index0f(item), 1);
    } else if(item === undefined){
      this.items.pop();
    } else {
      throw Error (`this is not an item`);
    }
  }

   render(shoppingListItem) {
    let renderList = '';

    for (let i = 0; i < this.items.length; i++){
      renderList += this.items[i].render();
    }

    return `<ul>${renderList}</ul>`;

  }

}


