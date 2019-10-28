const fs = require("fs");
const buf = fs.readFileSync(process.argv[2], "utf8");
const str = buf.split("\n").length - 1;
console.log(str);
