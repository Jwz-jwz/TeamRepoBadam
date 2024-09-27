const http = require("http");

const port = 2222;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.end("<h1>Hello first tag</h1>");
});

server.listen(port, () => {
  console.log(`Server ajillaj ehellee port: http://localhost:${port}`);
});
