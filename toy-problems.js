/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 
1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/
function plusOneSum(nums) {
	var count = 0;
	for (var i = 0; i < nums.length; i++) {
		count += 1 + nums[i];
	};
	return count;
}


/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/
function flatten(inputArray) {
	var flatArray = inputArray.slice(0, inputArray.length);
	for (var i = 0; i < flatArray.length; i++) {
		if(flatArray[i].length !== undefined) {
			var addElems = flatten(flatArray[i]);
			flatArray.splice(i, 1)
			for(var j = addElems.length - 1; j >= 0; j--) {
				flatArray.splice(i,0,addElems[j]);
			}
		}
	};
	return flatArray;
}

/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, 
b2, c2, ..., aN, bN, cN]

*/
function tripleArray(ABCs123s) {
	var As = [];
	var Bs = [];
	var Cs = [];
	for (var i = 0; i < ABCs123s.length / 3; i++) {
		As.push(ABCs123s[i]);
	};
	for (var i = ABCs123s.length / 3; i < ABCs123s.length * 2 / 3; i++) {
		Bs.push(ABCs123s[i]);
	};
	for (var i = ABCs123s.length * 2 / 3; i < ABCs123s.length; i++) {
		Cs.push(ABCs123s[i]);
	};

	var reOrder = [];
	for (var i = 0; i < As.length; i++) {
		reOrder.push(As[i],Bs[i],Cs[i]);
	};
	return reOrder;
}

/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of 
the first array and deleting a random element. Given these two arrays, find which element is 
missing in the second array.

*/
function findMissing(origArray, shuffArray) {
	for (var i = 0; i < origArray.length; i++) {
		if(shuffArray.indexOf(origArray[i]) === -1) {
			return origArray[i];
		}
	};
}




/*

Write a function that returns the longest word(s) from a sentence. The function should not return 
any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") 
// ["buffalo"] or ["Buffalo"]

*/
function longestWord(sentence) {
	var words = sentence.split(' ');
	var longestWord = words[0];
	for (var i = 1; i < words.length; i++) {
		if(words[i].length > longestWord.length) {
			longestWord = words[i];
		}
	};
	return longestWord;
}


/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/
function multiples(num1, num2) {
	var multiples = [];
	for (var i = 1; i <= 1000; i++) {
		if(i % num1 === 0 || i % num2 === 0) {
			multiples.push(i);
		}
	};
	var sum = 0;
	for (var i = 0; i < multiples.length; i++) {
		sum += multiples[i];
	};

	return sum;
}

/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, 
if the input is ‘tree traversal’ the output will be "tre avsl".

*/
function removeDupChars(str) {
	var chars = str.split('');
	for (var i = 0; i < chars.length; i++) {
		if(chars.indexOf(chars[i]) !== i) {
			chars.splice(i, 1);
			i--;
		}
	};
	return chars.join('');
}


/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/
function sum(num1, num2) {
	if (!isNaN(num1) && !isNaN(num2)) {
		return num1 + num2;
	}
	else {
		return function(num2) {
			return num1 + num2;
		}
	}
}

