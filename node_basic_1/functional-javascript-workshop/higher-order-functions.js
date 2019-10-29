const repeat = (operation, num) => {
  while (num > 0) {
    return repeat(operation, --num);
  }
  return operation();
};

module.exports = repeat;
