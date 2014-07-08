var threeItems = [1,2,3];
//create a function named 'last' that returns the last object from firstArray
//alert the result of your function

  //code here



//Fix 'arr' below so that it's an array full of integers from 0-10
var dicedArray = [0,1,4,5,7,8,10];

  //code here



//Loop through secondArray removing all values that aren't even 
//hint x % 2 --> checks for even numbers
var evenArray = [1,2,3,6,22,98,45,23,22,12];

  //code here



//below your given a function that will return a random number between 0 and 30, and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

  //code here



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of first. When you run this first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

  //code here

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];