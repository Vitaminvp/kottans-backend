const split = require("split");
const through2 = require("through2");
let count = 0;
process.stdin
  .pipe(split())
  .pipe(
    through2(function(line, _, next) {
      if (count % 2 !== 0) {
        this.push(line.toString().toUpperCase() + "\n");
      } else {
        this.push(line.toString().toLowerCase() + "\n");
      }
      ++count;
      next();
    }),
    function(done) {
      done();
    }
  )
  .pipe(process.stdout);

// var through = require("through2");
// var split = require("split");
//
// var lineCount = 0;
// var tr = through(function(buf, _, next) {
//   var line = buf.toString();
//   this.push(
//     lineCount % 2 === 0 ? line.toLowerCase() + "\n" : line.toUpperCase() + "\n"
//   );
//   lineCount++;
//   next();
// });
// process.stdin
//   .pipe(split())
//   .pipe(tr)
//   .pipe(process.stdout);
