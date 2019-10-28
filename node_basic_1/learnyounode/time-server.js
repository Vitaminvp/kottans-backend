const net = require("net");
const strftime = require('strftime');
const server = net.createServer(function(socket) {
  data = strftime("%F %H:%M", new Date());
  // socket.write(data)
  socket.end(data + "\n");
});
server.listen(process.argv[2]);
