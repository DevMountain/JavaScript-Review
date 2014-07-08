var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above your given a callFriend function, that returns another function. 
//Do what you need with the code above in order to console.log 'Calling Jake at 435-215-9248'


