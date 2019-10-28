// 1.
// console.log("HELLO WORLD")

// 2.
// let sum = 0;
// for(let i=2; i < process.argv.length; i++ ){
//   sum += Number(process.argv[i])
// }
// console.log(sum);

// 3.
// const fs = require("fs");
// buf = fs.readFileSync(process.argv[2]);
// const str = buf.toString();
// const strArray = str.split("\n");
// console.log(strArray.length-1);

// 4.
// const fs = require("fs");
// fs.readFile(process.argv[2], 'utf8', function callback(err, data) {
//   if(!err){
//     const strArray = data.split("\n");
//     console.log(strArray.length-1);
//   }
// });

// 5.
// const fs = require("fs");
// const listPrint = (path, ext) => {
//   fs.readdir(path, function callback(err, list) {
//     if (!err) {
//       for (let i = 0; i < list.length; i++) {
//         if (list[i].endsWith(`.${ext}`)) console.log(list[i]);
//       }
//     }
//   });
// };
// listPrint(process.argv[2], process.argv[3]);
// ----------------------------------------------------------
// var fs = require('fs')
// var path = require('path')
// var folder = process.argv[2]
// var ext = '.' + process.argv[3]
// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })

// 6.
// const filterFn = require("./mymodule_1.js");
// const dir = process.argv[2];
// const filterStr = process.argv[3];
//
// filterFn(dir, filterStr, function(err, list) {
//   if (err) {
//     return console.error("There was an error:", err);
//   }
//
//   list.forEach(function(file) {
//     console.log(file);
//   });
// });

// 7.
// const http = require('http');
// const url = process.argv[2];
//
// http.get(url, function(response) {
//   response.on("data", function (data) {
//     const str = data.toString();
//     console.log(str);
//   });
// });
// ----------------------------------------------------------
// var http = require('http')
// // http.get(process.argv[2], function (response) {
// //   response.setEncoding('utf8')
// //   response.on('data', console.log)
// //   response.on('error', console.error)
// // }).on('error', console.error)

// 8.
// var http = require("http");
// http
//   .get(process.argv[2], function(response) {
//     response.setEncoding("utf8");
//     let result = "";
//     response.on("data", data => {
//       result += data;
//     });
//     response.on("end", () => {
//       console.log(result.length);
//       console.log(result);
//     });
//   })
//   .on("error", console.error);
// ----------------------------------------------------------
// var http = require("http");
// var bl = require("bl");
//
// http.get(process.argv[2], function(response) {
//   response.pipe(
//     bl(function(err, data) {
//       if (err) {
//         return console.error(err);
//       }
//       data = data.toString();
//       console.log(data.length);
//       console.log(data);
//     })
//   );
// });

// 9.
// var http = require("http");
// var bl = require("bl");
// var results = [];
// var count = 0;
//
// function printResults() {
//   for (var i = 0; i < 3; i++) {
//     console.log(results[i]);
//   }
// }
//
// function httpGet(index) {
//   http.get(process.argv[2 + index], function(response) {
//     response.pipe(
//       bl(function(err, data) {
//         if (err) {
//           return console.error(err);
//         }
//
//         results[index] = data.toString();
//         count++;
//
//         if (count === 3) {
//           printResults();
//         }
//       })
//     );
//   });
// }
//
// for (let i = 0; i < 3; i++) {
//   httpGet(i);
// }

// 10.
// const net = require('net');
// const server = net.createServer(function (socket) {
//   socket.end(getFormattedCurrentTime() + "\n");
// });
// server.listen(process.argv[2]);
// function getFormattedCurrentTime() {
//   const now = new Date();
//
//   return [now.getFullYear(), formatNumber(now.getMonth() + 1), formatNumber(now.getDate())].join("-")
//       + " " + [formatNumber(now.getHours()), formatNumber(now.getMinutes())].join(":");
// }
// function formatNumber(number) {
//   return number < 10 ? "0" + number : number;
// }
// ----------------------------------------------------------
// var net = require('net')
// function zeroFill (i) {
//   return (i < 10 ? '0' : '') + i
// }
// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-' +
//       zeroFill(d.getMonth() + 1) + '-' +
//       zeroFill(d.getDate()) + ' ' +
//       zeroFill(d.getHours()) + ':' +
//       zeroFill(d.getMinutes())
// }
// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })
// server.listen(Number(process.argv[2]))

// 11.

// const http = require("http");
// const fs = require("fs");
// const server = http.createServer(function(req, res) {
//   res.writeHead(200, { "content-type": "text/plain" });
//   fs.createReadStream(process.argv[3]).pipe(res);
// });
//
// server.listen(Number(process.argv[2]));

// 12.

// const http = require("http");
// const fs = require("fs");
// const map = require("through2-map");
// const server = http.createServer(function(req, res) {
//   res.writeHead(200, { "content-type": "text/plain" });
//   if (req.method === "POST") {
//     req
//       .pipe(
//         map(function(chunk) {
//           return chunk.toString().toUpperCase();
//         })
//       )
//       .pipe(res);
//   }
// });
// server.listen(Number(process.argv[2]));
// ----------------------------------------------------------
// var http = require("http");
// var map = require("through2-map");
// var server = http.createServer(function(req, res) {
//   if (req.method !== "POST") {
//     return res.end("send me a POST\n");
//   }
//   req
//     .pipe(
//       map(function(chunk) {
//         return chunk.toString().toUpperCase();
//       })
//     )
//     .pipe(res);
// });
// server.listen(Number(process.argv[2]));

// 13.
// const http = require("http");
// const url = require("url");
//
// function parsetime(time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   };
// }
//
// function unixtime(time) {
//   return { unixtime: time.getTime() };
// }
//
// const server = http.createServer(function(req, res) {
//   const parsedUrl = url.parse(req.url, true);
//   const time = new Date(parsedUrl.query.iso);
//   let result;
//
//   if (/^\/api\/parsetime/.test(req.url)) {
//     result = parsetime(time);
//   } else if (/^\/api\/unixtime/.test(req.url)) {
//     result = unixtime(time);
//   }
//
//   if (result) {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(result));
//   } else {
//     res.writeHead(404);
//     res.end();
//   }
// });
// server.listen(Number(process.argv[2]));
