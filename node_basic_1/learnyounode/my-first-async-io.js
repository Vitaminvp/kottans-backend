const fs = require("fs");
fs.readFile(process.argv[2], "utf8", (err, buff) => {
  if (err) throw new Error(err);
  console.log(buff.split("\n").length - 1);
});
