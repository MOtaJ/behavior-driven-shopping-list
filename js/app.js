let theShoppingList = new ShoppingList;
const contentContainer = document.getElementById("content");

/*document.getElementById("content").innerHTML = ShoppingList.render();*/

const addButton = document.getElementById("add_shopping_list_item_button");

addButton.addEventListener('click', add_to_shopping_list);

function add_to_shopping_list(){
let title = document.getElementById('inputTitle');
let description = document.getElementById('inputDescription');

let new_shopping_list_item = new ShoppingListItem(title.value, description.value);
console.log(new_shopping_list_item);
let output =  theShoppingList.addItem(new_shopping_list_item);
document.getElementById("content").innerHTML = theShoppingList.render();
}

function changeCheckedStatus(idx, checkbox){
  if (checkbox.checked === true) {
    theShoppingList.items[idx].check();
  } else if(checkbox.checked === false) {
    theShoppingList.items[idx].uncheck();
  }
}