var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function
function last(){
	return threeItems[threeItems.length - 1]
}

//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

function evensOnly(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2) {
			arr.splice(i, 1);
		}
	};
	return arr;
}
console.log(evensOnly(evenArray))
//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 
//'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if 
//that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
function checkNumber(arr){
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === getRandomArbitrary()) {
			console.log("true");
		}
	};
}

console.log(checkNumber(randomArray))

// //Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first 
//should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second = [];

var second = first;
second.push(6, 7)
// //write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
// var sentence = "Dev Mountain is the best"
var myPoem = 'What is a jQuery but a misunderstood object?'

function findLonges(str){
	var arr = str.split(' ');
	var word = '';
	var longest = 0;

	for (var i = 0; i < arr.length; i++) {  
		if (longest < arr[i].length) {
			longest = arr[i].length;
			word = arr[i]
		}
	};
	return word
};
console.log(findLonges(myPoem))

// //write a function called capitalize that takes in the myPoem variable and capitalizes every word 

// //What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?
function capitalize(str){
	 return str.toUpperCase();
}

console.log(capitalize(myPoem))

var theOdyssey = "function expression or function declaration? Tis an obvious choice";
// //Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.
function vowelCounter(arr){
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === 'a'){
			count += 1;
		}	else if (arr[i] === 'e') {
				count += 1
			} else if (arr[i] === 'i'){
				count += 1;
			} else if (arr[i] === 'o') {
				count += 1
			} else if (arr[i] === 'i') {
				count += 1;
			}
		} 
	return count;
	};
	
console.log(vowelCounter(theOdyssey))










