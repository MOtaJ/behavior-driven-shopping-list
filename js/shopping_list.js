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