const countWords = inputWords => inputWords.reduce(reducer, {});

const reducer = (acc, cur) => {
  acc[cur] = ++acc[cur] || 1;
  return acc;
};

module.exports = countWords;
