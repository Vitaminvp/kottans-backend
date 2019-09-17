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
// function Spy(target, method) {
//   const fn = target[method];
//   const result = { count: 0 };
//   target[method] = function(...args) {
//     result.count += 1;
//     return fn.apply(this, args);
//   };
//   return result;
// }
// module.exports = Spy;
// -------------------------------------------
// function Spy(target, method) {
//   var originalFunction = target[method];
//   // use an object so we can pass by reference, not value
//   // i.e. we can return result, but update count from this scope
//   var result = {
//     count: 0
//   };
//   // replace method with spy method
//   target[method] = function() {
//     result.count++; // track function was called
//     return originalFunction.apply(this, arguments); // invoke original function
//   };
//   return result;
// }
// module.exports = Spy;

// 13.
// function repeat(operation, num) {
//   // modify this so it can be interrupted
//   if (num <= 0) return;
//   operation();
//   return setImmediate(() => repeat(operation, --num));
// }
// module.exports = repeat;
//
// function repeat(operation, num) {
//   if (num <= 0) return;
//   operation();
//   // release control every 10 or so
//   // iterations.
//   // 10 is arbitrary.
//   if (num % 10 === 0) {
//     setTimeout(function() {
//       repeat(operation, --num);
//     });
//   } else {
//     repeat(operation, --num);
//   }
// }
// module.exports = repeat;

// 14.
// function repeat(operation, num) {
//   if (num <= 0) return;
//   operation();
//   return () => repeat(operation, --num);
// }
// function trampoline(fn) {
//   let func;
//   if (fn && typeof fn === "function") {
//     func = fn();
//   }
//   return func;
// }
// module.exports = function(operation, num) {
//   return trampoline(repeat(operation, num));
// };
//  -------------------------------------------
// function repeat(operation, num) {
//   return function() {
//     if (num <= 0) return
//     operation()
//     return repeat(operation, --num)
//   }
// }
// function trampoline(fn) {
//   while(fn && typeof fn === 'function') {
//     fn = fn()
//   }
// }
// module.exports = function(operation, num) {
//   trampoline(function() {
//     return repeat(operation, num)
//   })
// }

// 15.
// function loadUsers(userIds, load, done) {
//   const users = [];
//   let count = 0;
//   for (let i = 0; i < userIds.length; i++) {
//     users[i] = load(userIds[i]);
//     count++;
//     if (count === userIds.length) {
//       done(users);
//     }
//   }
//   return users;
// }
// module.exports = loadUsers;
//  -------------------------------------------
// function loadUsers(userIds, load, done) {
//   var completed = 0;
//   var users = [];
//   userIds.forEach(function(id, index) {
//     load(id, function(user) {
//       users[index] = user;
//       if (++completed === userIds.length) return done(users);
//     });
//   });
// }
//
// module.exports = loadUsers;


// 16.
// function getDependencies(tree) {
//   const depth = dep => {
//     if (!dep.dependencies) return [];
//     if (typeof dep === "object" && !Array.isArray(dep))
//       return Object.keys(dep.dependencies).reduce((acc, item) => {
//         return dep.dependencies[item].dependencies
//           ? [
//               ...acc,
//               `${item}@${dep.dependencies[item].version}`,
//               ...depth(dep.dependencies[item])
//             ]
//           : [...acc, `${item}@${dep.dependencies[item].version}`];
//       }, []);
//   };
//   const unic = Array.from(new Set(depth(tree))).sort();
//   return unic;
// }
// module.exports = getDependencies;
// -------------------------------------------
// function getDependencies(mod, result) {
//   result = result || [];
//   var dependencies = (mod && mod.dependencies) || [];
//   Object.keys(dependencies).forEach(function(dep) {
//     var key = dep + "@" + mod.dependencies[dep].version;
//     if (result.indexOf(key) === -1) result.push(key);
//     getDependencies(mod.dependencies[dep], result);
//   });
//   return result.sort();
// }
// module.exports = getDependencies;

// 17.
// function curryN(fn, n) {
//   const arity = n || fn.length;
//   return function one(...args1) {
//     if(args1.length >= arity) {
//       return fn(...args1)
//     }
//     return function two (...args2) {
//       const args = [...args1, ...args2];
//       if(args.length >= arity) {
//         fn(...args)
//       }
//       return one(...args)
//     }
//   }
// }
// module.exports = curryN
// -------------------------------------------
// function curryN(fn, n) {
//   n = n || fn.length
//   return function curriedN(arg) {
//     if (n <= 1) return fn(arg)
//     return curryN(fn.bind(this, arg), n - 1)
//   }
// }
// module.exports = curryN

// 18.
// module.exports = Function.prototype.call.bind(Array.prototype.slice);