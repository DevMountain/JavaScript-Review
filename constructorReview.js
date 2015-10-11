//Create an Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here

function Animal(species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
}

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here

function createPerson(name, age, height, gender) {
  var person = {
    name: name,
    age: age,
    height: height,
    gender: gender
  };
  return person;
}

//Create an animal array and a person array.

  //code here
var animal = [];
var person = [];

//Create two instances of Animal and push those into your animal array

  //code here
animal.push(new Animal('Feline', 'Tiger', 4, 'orange and black', ['meat', 'Starbursts', 'beef patties']));
animal.push(new Animal('Kanine', 'Wolf', 4, 'gray', ['meat', 'Fruit Gushers', 'pinecones']));

//Create two instances of person and push those into your person array.

  //code here
person.push(createPerson('Christian', 22, '5\'11\"', 'male'));
person.push(createPerson('Veronica', 21, '5\'6\"', 'female'));

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here
Animal.prototype.eat = function() {
  var randomNum = Math.floor(Math.random() * this.food.length);
  alert(this.name + ' ate ' + this.food[2]);
}

//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?
  // No, because in order to do that we would need to add a prototype property to every instance of person, which we cannot do as a 'person' object is not created until the createPerson() function is called. Also see #3 below.

/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  //It creates a new object with the Constructor
  2) What's a good way to describe the keyword 'this'
  //'this' refers to whatever comes before the dot when you call it
  3) Can a normal function which creates an object and then returns that object use the prototype?
  //No
  4) What happens if you forget to use 'new' when calling a constructor?
<<<<<<< HEAD
  //It would not actually call the constructor.
*/
||||||| merged common ancestors
*/
=======
*/
>>>>>>> refs/remotes/origin/master
