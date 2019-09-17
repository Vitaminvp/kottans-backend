// var concat = require('concat-stream');
// var http = require('http');
//
// var server = http.createServer(function (req, res) {
//   if (req.method === 'POST') {
//     req.pipe(concat(function (body) {
//       var obj = JSON.parse(body);
//       res.end(Object.keys(obj).join('\n'));
//     }));
//   }
//   else res.end();
// });
// server.listen(5000);

const concat = require("concat-stream");
process.stdin.pipe(
  concat(buffer => {
    process.stdout.write(
      buffer
        .toString()
        .split("")
        .reverse()
        .join("")
    );
  })
);

// var concat = require('concat-stream');
// process.stdin.pipe(concat(function (src) {
//   var s = src.toString().split('').reverse().join('');
//   console.log(s);
// }));
