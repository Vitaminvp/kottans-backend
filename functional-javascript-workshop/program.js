// 1.
// function upperCaser(input) {
//   return input.toUpperCase()
// }
// module.exports = upperCaser

//2.
// function repeat(operation, num) {
//   while (num > 0) {
//     operation();
//     num--;
//   }
// }
// -------------------------------------------
// function repeat(operation, num) {
//   if (num <= 0) return
//   operation()
//   return repeat(operation, --num)
// }
// module.exports = repeat;

// 3.
// function doubleAll(numbers) {
//   return Array.from(numbers).map(number => {
//     return number * 2;
//   });
// }
// module.exports = doubleAll;

// 4.
// function getShortMessages(messages) {
//   return messages
//     .map(message => message.message)
//     .filter(message => message.length < 50);
// }
// module.exports = getShortMessages;

// 5.
// function checkUsersValid(goodUsers) {
//   return function allUsersValid(submittedUsers) {
//     return submittedUsers.every(submittedUser => {
//       return goodUsers.some(goodUser => submittedUser.id === goodUser.id);
//     });
//   };
// }
// module.exports = checkUsersValid;

// 6.
// function countWords(inputWords) {
//   return inputWords.reduce((acc, cur) => {
//     if (cur in acc) {
//       return { ...acc, [cur]: acc[cur] + 1 };
//     }
//     return { ...acc, [cur]: 1 };
//   }, {});
// }
// -------------------------------------------
// function countWords(arr) {
//   return arr.reduce(function(countMap, word) {
//     countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
//     return countMap
//   }, {}) // second argument to reduce initialises countMap to {}
// }
// module.exports = countWords;

// 7.
// function reduce(arr, fn, initial) {
//   return (function reduceOne(index, value) {
//     if (index > arr.length - 1) return value; // end condition
//     return reduceOne(index + 1, fn(value, arr[index], index, arr)); // calculate & pass values to next step
//   })(0, initial); // IIFE. kick off recursion with initial values
// }
// module.exports = reduce;

// 8.
// function duckCount() {
//   return Array.from(arguments).filter(item =>
//     Object.prototype.hasOwnProperty.call(item, "quack")
//   ).length;
// }
// module.exports = duckCount;

// 9.
// function logger(namespace) {
//   return function(...args) {
//     console.log(`${namespace}`, ...args);
//   };
// }
// module.exports = logger;
// -------------------------------------------
// var slice = Array.prototype.slice;
// function logger(namespace) {
//   return function() {
//     console.log.apply(console, [namespace].concat(slice.call(arguments)));
//   };
// }
// module.exports = logger;

// 10.
// module.exports = function(namespace) {
//   return function (...args) {
//     console.log(...args)
//   }.bind(null, namespace)
// }
// -------------------------------------------
// module.exports = function(namespace) {
//   return console.log.bind(console, namespace)
// }

// 11.
// module.exports = function arrayMap(arr, fn) {
//   return arr.reduce((acc, curr) => {
//     return [...acc, fn(curr)];
//   }, []);
// };
// -------------------------------------------
// module.exports = function arrayMap(arr, fn, thisArg) {
//   return arr.reduce(function(acc, item, index, arr) {
//     acc.push(fn.call(thisArg, item, index, arr))
//     return acc
//   }, [])
// }

// 12.
function Spy(target, method) {
  // SOLUTION GOES HERE
}

module.exports = Spy
