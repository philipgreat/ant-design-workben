const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request);
  response.end();
});

server.listen(9000,"0.0.0.0");

