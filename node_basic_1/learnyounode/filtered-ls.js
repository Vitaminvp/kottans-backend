const fs = require("fs");
const path = require("path");

fs.readdir(process.argv[2], (err, list) => {
  const result = list.filter(
    file => path.extname(file) === `.${process.argv[3]}`
  );
  console.log(result.join("\n"));
});
