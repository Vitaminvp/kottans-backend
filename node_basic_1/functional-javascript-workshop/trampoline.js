function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  if (num <= 0) return operation();

  return () => repeat(operation, --num)
}

function trampoline(fn) {
  while(typeof fn === "function"){
    return fn()
  }
  return fn
}

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  return trampoline(repeat(operation, num))
}
