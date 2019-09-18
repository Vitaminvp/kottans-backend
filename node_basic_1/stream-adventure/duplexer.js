const spawn = require('child_process').spawn;
const duplex= require('duplexer2');
module.exports = function(cmd,args){
  const stream = spawn(cmd, args);
  return duplex(stream.stdin, stream.stdout);
}