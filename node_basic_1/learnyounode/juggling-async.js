const bl = require("bl");
const http = require("http");

let count = 0;
let res = [];
for (let i = 0; i < 3; i++) {
  httpGeq(i);
}
function httpGeq(i) {
  http.get(process.argv[2 + i], response => {
    response.pipe(
      bl((err, data) => {
        if (err) console.error(err);
        res[i] = data.toString();
        if (++count === 3) console.log(res.join("\n"));
      })
    );
  });
}
