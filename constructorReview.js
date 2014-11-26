//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  var Animal = function(species, name, legs, color, food){
    this.species = species;
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.food = food;
  }


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  var person = function(name, age, height, gender){
    return {
      name: name,
      age: age,
      height: height,
      gender: gender
    }
  }


//Create a animal array and a person array.

  var animal = [];
  var person = [];


//Create two instances of Animal and push those into your animal array

  animal.push(new Animal('dog', 'tyler', '2', 'white', [1,2,3]), new Animal('cat', 'brock', '2', 'white', [1,2,3,4]));


//Create two instances of person and push those into your person array.

  person.push(new Person('dog', 'tyler', '2', 'white'), new Person('cat', 'brock', '2', 'white'));


//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  Animal.prototype.eat = function(){
    var food = this.food[3];
    alert(this.name + ' ate ' + food);
  }


//At this point, if we wanted to add something to every istance of person could we?

  //Yes or no? and why or why not?
  Yes, prototype.



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
      - var this = Object.create(Thing.prototype);
      - return this;
  2) What's a good way to describe the keyword 'this'
      - this is bound to whatever is to the left of the dot at calltime
  3) Can a normal function which creates an object and then returns that object use the prototype?
      - No, not be default
  4) What happens if you forget to use 'new' when calling a constructor?
      - 'this' points to the window object
*/