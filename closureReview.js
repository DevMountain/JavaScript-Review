var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above your given a callFriend function, that returns another function. 
//Do what you need with the code above in order to console.log 'Calling Jake at 435-215-9248'





/*

Write a function that accepts a function as it's only argument and returns a new function (which calls the original function that was passed in) that can only ever be executed once.

Once completed, add a second arguments that allows the function to be executed x number of times before it stops working.

*/
