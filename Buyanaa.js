// const http = require("http");

// const port = 2222;

// const server = http.createServer((request, response) => {
//   response.statusCode = 200;
//   response.setHeader("Content-Type", "text/plain");
//   switch (request.method) {
//     case "GET":
//       return response.end("Get huselt irlee");
//     case "POST":
//       return response.end("Post huselt irlee");
//     case "PUT":
//       return response.end("Put huselt irlee");
//     case "DELETE":
//       return response.end("Delete huselt irlee");
//     case "PATCH":
//       return response.end("Patch huselt irlee");
//     default:
//       response.end("METHOD-GUI");
//   }
//   response.end("<h1>Hello h1 tag</h1>");
// });

// server.listen(port, () => {
//   console.log("Server ajillaj ehellee port: http://localhost:${port}");
// });

import bodyParser from "body-parser";
import express from "express";

const port = 8888;
const app = express();

app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.send("Hello GET huselt irlee");
});

app.post("/", (request, response) => {
  console.log(request.body);
  response.send("Hello tanii POST irlee");
});

app.listen(port, () => {
  console.log("Server ajillaj bn http://localhost:${port}");
});
