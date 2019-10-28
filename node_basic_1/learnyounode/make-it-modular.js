const mymodule = require("./mymodule_1.js");

const callback = (err, data) => {
  if (err) console.log;
  console.log(data.join("\n"));
};

mymodule(process.argv[2], process.argv[3], callback);
