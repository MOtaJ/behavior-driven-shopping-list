
/*jshint esversion: 6*/

console.log('**mocha**', mocha)
console.log('**chai**', chai)

const should = chai.should();
const expect = chai.expect;

describe ('ShoppingListItem', () => {

  let pizza;

  beforeEach(() => {
    pizza = new ShoppingListItem('pizza', 'a slice of pizza');
  })

  it('should be a class', () => {
    pizza.should.be.a.function
  })

  it('should have a constructor argument called name', () => {
    pizza.should.have.property('name')
  })

  it('should have a constructor argument called description', () => {
    pizza.should.have.property('description')
  })

  it('should have a constructor method that accepts 2 arguments (name) and (description)', () => {
    pizza.constructor.should.have.length(2)
  })

})



describe('check', () => {

  let pizza;

  beforeEach(() => {
    pizza = new ShoppingListItem('pizza', 'a slice of pizza');
  })

  it('should be a method called check', () => {
    pizza.should.be.a.function
  })

  it('method check should return true', () => {
    pizza.check();
    pizza.is_done.should.equal(true);
  })

})

describe('uncheck', () => {

  let pizza;

  beforeEach(() => {
    pizza = new ShoppingListItem('pizza', 'a slice of pizza');
  })

  it('should have a method called uncheck', () => {
    pizza.should.be.a.function
  })

  it('method uncheck should set is_done to false', () => {
    pizza.uncheck();
    pizza.is_done.should.equal(false);
  })

})

describe('render', () => {

  let pizza;

  beforeEach(() => {
    pizza = new ShoppingListItem('pizza', 'a slice of pizza');
  })

  it('method "render" should return an HTML string', () => {
  pizza.should.be.a.function
  pizza.render().should.equal(`<li class='completed_${pizza.is_done}'><span>${pizza.name}</span><span>${pizza.description}</span></li>`)
 })

})


describe('ShoppingList', () => {

    let myList = new ShoppingList();

  beforeEach(() => {
    let newItem = new ShoppingListItem('apple', 'a big juicy apple');
  })

  it('should be a class', () => {
    myList.should.be.a.function
  })

  it('should have property named "items"', () => {
    myList.should.have.property('items')
  })

})



describe('addItem', () => {

  let myList = new ShoppingList();
  let newItem = new ShoppingListItem('apple', 'a big juicy apple');

  it('Add Item should be a function', () => {
    myList.addItem.should.be.a.function
  })

})

describe('removeItem', () => {

  let myList = new ShoppingList();

  it('remove item should be a function', () => {
    myList.removeItem.should.be.a.function
  })
})

describe('render', () => {

  let myList = new ShoppingList();
  let newItem = new ShoppingListItem('apple', 'a big juicy apple');
  myList.addItem(newItem);

  it('should be a function', () => {
    myList.render.should.be.a.function
  })


  it('should return an HTML formatted string', () => {
    myList.render().should.equal(`<ul><li class=\'completed_null\'><span>apple</span><span>a big juicy apple</span></li></ul>`);
  })

})

