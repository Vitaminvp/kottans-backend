const [, , ...rest] = process.argv;
const summ = rest.reduce((acc, cur) => acc + Number.parseFloat(cur), 0);
console.log(summ);
