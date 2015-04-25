//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.
var callFriend = function(numberparent){
  var friend = 'Jake';
  
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }

  return callF(numberparent);
};

console.log(callFriend('435-215-9248'))

/*
Write a function that accepts a function as it's first argument and returns a new function (which calls the original function 
that was passed in) that can only ever be executed once.

Once completed, add a second arguments that allows the function to be executed N number of times. After the function has 
been called N number of times, console.log('STAHHP');
*/
function sayHi(){
	console.log('Hello')
}

function limiter(cb){
	var hasRun = false;

	return function(){
		if (!hasRun) {
			hasRun = true;
			return cb();
		}
	}
}


var inside = limiter(sayHi)
console.log(inside())