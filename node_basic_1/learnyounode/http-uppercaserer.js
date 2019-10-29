const map = require('through2-map');
const http = require("http");



const server = http.createServer( (req, res) =>  {
  if (req.method !== 'POST') {
    throw new Error('send me a POST')
  }

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res);
});
server.listen(process.argv[2])