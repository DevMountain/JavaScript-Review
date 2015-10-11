var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

  //code here
function last(arr) {
  return arr[arr.length - 1];
}
alert(last(threeItems));


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

  //code here
for (var i = 0; i < evenArray.length; i++) {
  if(evenArray[i] % 2 !== 0) {
    evenArray.splice(i, 1);
    i--;
  }
}

alert(evenArray);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


<<<<<<< HEAD
//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
||||||| merged common ancestors

//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
=======

//below you're given a function that will return a random number between 0 and 30 and an array full of numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
>>>>>>> refs/remotes/origin/master
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

  //code here

function checkArray() {
  var result = false;
  for (var i = 0; i < randomArray.length; i++) {
    if (getRandomArbitrary() === randomArray[i]) {
      return true;
    }
  }
  return result;
}

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

  //code here

var second = first.slice(0);
second.push(6, 7);


alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best";f

  //code here

function longest(sentence) {
  var array = sentence.split(' ');
  var result = array[0];
  for (var i = 1; i < array.length; i++) {
      console.log(result);
      if (result.length < array[i].length) {
      result = array[i];
    }
  }
  return result;
}

alert(longest(sentence));

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?';
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

  //code here

function capitalize (myPoem) {
    var array = myPoem.split('');
    var result = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i] === ' ') {
        result.push(array[i]);
        result.push(array[i + 1].toUpperCase());
        i++;
      } else {
        result.push(array[i]);
      }
    }
    result = result.join('');
    return result;
}

alert(capitalize(myPoem));


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

function vowelCounter(str) {
    var arr = str.split('');
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u') {
            counter++;
        }
    }
    return "The phrase \"" + str + "\" has " + counter + " vowels.";
}

alert(vowelCounter(theOdyssey));
