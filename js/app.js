let theShoppingList = new ShoppingList;
const contentContainer = document.getElementById("content");


const addButton = document.getElementById("add_shopping_list_item_button");
      addButton.addEventListener('click', add_to_shopping_list);

function add_to_shopping_list(){
let title = document.getElementById('inputTitle');
  let description = document.getElementById('inputDescription');
  let new_shopping_list_item = new ShoppingListItem(title.value, description.value);
  let output =  theShoppingList.addItem(new_shopping_list_item);
  document.getElementById("content").innerHTML = theShoppingList.render();

  const checkOnChange = document.querySelectorAll(".check-box");
  console.log('chekcing checkOnChange' , checkOnChange);
  for (let i = 0; i < checkOnChange.length; i++){
    console.log(checkOnChange[i]);
    checkOnChange[i].addEventListener('click', () =>{
      console.log("here");
    });
  }
}

function changeCheckedStatus(idx, checkbox){
  if (checkbox.checked === true) {
    theShoppingList.items[idx].check();
  } else if(checkbox.checked === false) {
    theShoppingList.items[idx].uncheck();
  }
}

// checkOnChange.addEventListener('click', changeCheckedStatus);

// function changeCheckedStatus(idx, checkbox){
//   if (checkbox.checked === true) {
//     theShoppingList.items[idx].check();
//   } else {
//     theShoppingList.items[idx].uncheck();
//   }
// }

