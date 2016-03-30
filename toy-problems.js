/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/

function plusOneSum(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    arr[i]++;
    result += arr[i];
  }
  return result;
}

/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/

function flatten(arr) {
  var newArray = arr.join('').split('');
  for (var i = 0; i < newArray.length; i++) {
    if (newArray[i] === ',') {
      newArray.splice(i, 1);
    }
  }
  return newArray;
}


/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/

var arr = ['a1', 'a2', '...', 'aN', 'b1', 'b2', '...', 'bN', 'c1', 'c2', '...', 'cN']

function sort(arr) {
  var arr1 = [];
  var arr2 = [];
  var arrN = [];
  var arrDots = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].substring(1) === '1') {
      arr1.push(arr[i]);
    } else if (arr[i].substring(1) === '2') {
      arr2.push(arr[i]);
    }  else if (arr[i].substring(1) === 'N') {
      arrN.push(arr[i]);
    }  else {
      arrDots.push(arr[i]);
    }
  }
  arrDots = arrDots.splice(0, 1);
  var result = arr1.concat(arr2, arrDots, arrN);
  return result;
}

/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/


var arr1 = [1, 3, 5, 90, 'hey', 'what', 'alphabet'];

function findMissingElement(arr1, arr2) {
  var arr1 = arr1.sort();
  var arr2 = arr2.sort();
  var missingElement = [];
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      missingElement.push(arr1[i]);
    }
  }
  return 'The missing element is ' + missingElement;
}



/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/

function longestWords(str) {
  var arr = str.split(' ');
  var result = [arr[0]];
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i].length < arr[i + 1].length) {
      result.splice(0, 1);
      result.push(arr[i + 1]);
    }
  }
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].length === result[0].length && arr[i].toLowerCase !== result[0].toLowerCase) {
      result.push(arr[i]);
    }
  }
  return result;
}

/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/
num1 = 9
i = 3;

var threes = 0;

function multiples(num1, num2) {
  var arr = [];
  var result = 0;
  for (var i = num1; i < 1000; i += num1) {
    arr.push(i);
  }
  for (var i = num2; i < 1000; i += num2) {
    arr.push(i);
  }
  arr.forEach(function(element) {
    result += element;
  })
  return result;
}

/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/

function removeDup(str) {
  var arr = str.split('');
  var obj = {};
  arr.forEach(function (element1) {
    obj[element1] = element1;
  })
  var result = Object.keys(obj).join('');
  console.log(result);
}

removeDup('tree traversal');

/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/

function sum(num1, num2) {
  if (num2) {
    return num1 + num2;
  } else {
    return function (num) {
      return num1 + num;
    }
  }
}