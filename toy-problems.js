/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/

var plusOneSum = function(arr){
  var count = 0;
  for(var i = 0; i < arr.length; i++){
    count += arr[i] + 1;
  }
  return count;
}

/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/
// newArr = [1, 2, 3, 4, 5, 6, 7]
var flatten = function(arr, newArr){
  var newArr = newArr || [];
  for(var i = 0; i < arr.length; i++){
    if(!Array.isArray(arr[i])){
      newArr.push(arr[i]);
    } else if(Array.isArray[arr[i]]){
      flatten(arr[i], newArr);
    }
  }
  return newArr;
}

/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/

var order = function(arr){
  var obj = {};
  obj.length = 0;
  for(var i = 0; i < arr.length; i++){
    var index = arr[i].slice(1);
    if(obj[index]){
      obj[index].push(arr[i]);
    } else {
      obj[index] = [arr[i]];
      obj.length++;
    }
  }

  var newArr = [];
  for(var i = 1; i < obj.length + 1;  i++){
    newArr = newArr.concat(obj[i]);
  }

  return newArr;
}


/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/

var find = function(arr1, arr2){
  arr2 = arr2.sort(function(a,b){
    return a-b;
  });

  for(var i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return arr1[i];
    }
  }
}


/*
//typo
Implement the getElementsByClassName(className) function in Javascript.

*/


/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/

var longest = function(str){
  var longestWords = [];
  var length = 0;
  var obj = {}
  str = str.split(' ');
  for(var i = 0; i < str.length; i++){
    if(str[i].length > length && !obj[str[i].toLowerCase()]){
      longestWords = [str[i]];
      obj = {};
      obj[str[i].toLowerCase()] = true;
      length = str[i].length;
    } else if(str[i].length === length && !obj[str[i].toLowerCase()]){
      longestWords.push(str[i]);
      obj[str[i].toLowerCase()] = true;
    }
  }
  return longestWords;
};


/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/


/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/



/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/
