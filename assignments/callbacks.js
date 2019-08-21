// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/







function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
};
//test getLength()
const testArray = [1,2,3,4,5,6];
let testLength = function(x){
  console.log(x);
};
getLength(items,testLength);



















function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1]);
};
//test last()
// const testArray = [1,2,3,4,5,6];
// let testLast = function(x){
//   console.log(x);
// };
// last(testArray,testLast);


function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x+y);
};

sumNums(2,3, add = (x) =>{
  return console.log(x);
});
// let add = function(x){
//   return console.log(x);
// };
// let add = (x) => {
//   return console.log(x);
// }

// sumNums(2,3,add);


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x*y);
};

multiplyNums(2,3,multiply = (x)=>{
  return console.log(x);
});

// let multiply = function(a){
//   return console.log(a);
// };

// multiplyNums(2,3,multiply);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.includes(item) === true){
    return cb(list.includes(item));
  } else{
    return cb(false);
  } 
};
//test
// let test = function(item,list){
//   console.log(item);
// };
contains("Pencil",items,test = (item,list)=>{
  return console.log(item);
});
// contains(9,items,test);



/* STRETCH PROBLEM */

// function removeDuplicates(array, cb) {
//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array.
//   let catchArr = [];
//   if (!catchArr.includes())

// }
