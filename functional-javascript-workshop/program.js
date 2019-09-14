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
function reduce(arr, fn, initial) {
  // SOLUTION GOES HERE
}

module.exports = reduce
