//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array 
//of foods they can eat).

function Animal(species, name, legs, color, food){
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
}

//Now create a person function that creates an object and returns it (not in constructor form) that has the following 
//parameters. name, age, height, gender

function Person(name, age, height, gender){
  return {
    name: name,
    age: age,
    height: height,
    gender: gender
  }
}

var me = Person('art', 2, '5 foot', 'male');

//Create a animal array and a person array.

var animalArr = [];
var personArr = [];

//Create two instances of Animal and push those into your animal array

var coco = new Animal('Dog', 'Coco', 4, 'tan', 'Elk');
var snoopy = new Animal('Dog', 'Snoopy', 4, 'black and white', 'everything');

animalArr.push(coco)
animalArr.push(snoopy)

console.log(animalArr)

//Create two instances of person and push those into your person array.

var me = Person('Art', 25, '5 foot', 'male');
var cindy = Person('Cindy', 23, 'small', 'female');

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food 
//array, then alert "(name) ' ate ' (whichever food was chosen)".

Animal.prototype.ateSentence = function() {
  console.log(this.name + ' ate ' + this.food);
};

//At this point, if we wanted to add something to every istance of person could we? 

Person.prototype.sayHi = function() {
  console.log('hello');
};

/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  creates a new instance of the constructor function
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  No
  4) What happens if you forget to use 'new' when calling a constructor?
  you will get undifined on your object.
*/