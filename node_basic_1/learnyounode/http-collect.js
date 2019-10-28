const bl = require("bl");
const http = require("http");

http
  .get(process.argv[2], response => {
    response.pipe(
      bl(function(err, data) {
        console.log(data.toString().length);
        console.log(data.toString());
      })
    );
  })
  .on("error", console.error);
