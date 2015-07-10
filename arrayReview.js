var threeItems = [1,2,3,3,4,3,4];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

function returnLast(arr) {
		var lastItem = arr[arr.length - 1];
		return lastItem;
};
console.log(returnLast(threeItems));

//Loop through evenArray removing all values that aren't even 
var evenArray = [0,1,2,3,6,22,98,45,23,22,12];

function allOdds(arr) {
	var b = [];
	for (var i = 2, max = arr.length; i < max; ++i) {
		if ((arr[i] % 2) === 0) {
			b.push(arr[i]);
		}
	}
	return b;
}

console.log(allOdds(evenArray));

//below you're given a function that will return a random number between 0 and 30 and an array full or 
//numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through 
//the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

function checkRandom(arr) {
	var random = getRandomArbitrary();
	for (var i = 0; i < arr.length; ++i) {
		if (arr[i] === random) {
			console.log('true', arr[i]);
		} 
	}
}
checkRandom(randomArray);

//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first 
//should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

second = first.slice();
second.push(6,7);
console.log(second)

//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

function longest(str) {
	var strArr = str.split(' '),
			count = 0,
			longest = null;

	for (var i = 0; i < strArr.length; ++i) {
		if (strArr[i].length > count) {
			count = strArr[i].length;
			longest = strArr[i];
		}
	}
	return longest
}
console.log(longest(sentence));

//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'

function capitalize(str) {
	var strArr = str.split(' '),
			newString = '';
	
	for (var i = 0; i < strArr.length; ++i) {
		newString += strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1, strArr[i].length) + ' ';	
	}
	return newString;
}
console.log(capitalize(myPoem));

var theOdyssey = "function expression or function declaration? Tis an obvious choiceiounkniusdf";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that 
//string

function vowelCounter(str) {
	var vowels = ['a','e','i','o','u'],
			arr = str.split(''),
			count = 0;
	
	for (var i = 0; i < arr.length; i++) {
		for (var y = 0; y < vowels.length; y++) {
			// console.log(arr[i])
			if (arr[i] === vowels[y]) {
				count = count + 1;
			}
		}
	}
	return count
}

console.log(vowelCounter(theOdyssey))

