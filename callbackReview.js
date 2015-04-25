/* Declare and Define the functions here that will make the function calls below work properly */
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function first(arr, cb){
  firstName = arr[0];
  return cb(firstName);  
};

function sayFirst(){
  console.log('The first name in names is ', firstName)
}

first(names, sayFirst)

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function last(arr, cb){
  var lastName = arr[arr.length - 1]
  return cb(lastName)
}


last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});

//have the contains function return a boolean value for if the name is in the array or not.


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function contains(str, arr, cb) {
  var yes = null;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === str){
      var yes = true;
    }
  }
  cb(yes)
}

contains('Colt', names, function(yes){
  if(yes){
    console.log('colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

// var numbers = [1,2,3,4,5];
// //Produces a new array of values by mapping each value in list through a transformation function
// map(numbers, function(num){
//   return num * 2; //returns an array of [2,4,6,8,10]
// });

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function uniq(arr, cb){
  
  var uniqArr = [];
  var uniqObj = {};
  
  for (var i = 0; i < arr.length; i++) {
    uniqObj[arr[i]] = null;
  };
  for (var key in uniqObj) {
    uniqArr.push(key)
  }
  cb(uniqArr);
}

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function each(arr, cb){
  for (var i = 0; i < arr.length; i++) {
    var indice = i;
    var item = arr[i];
  };
  cb(item, indice);
}

each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

function getUserById(str, arr, cb){
  for (var i = 0; i < arr.length; i++) {
      if (arr[i].id === str){
        cb(arr[i])
      }
    }
  };


getUserById('16t', users, function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
});

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




// //Looks through each value in the list, returning the first one that passes a truth test 
// var numbers  = [1, 2, 3, 4, 5, 6];
// find(numbers, function(num){ 
//   return num % 2 == 0; //should return 2
// })
