import express from "express";
import bodyParser from "body-parser";

const port = 8888;
const app = express();

app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.send("Hello, Your GET request has arrived.");
});

app.post("/", (request, response) => {
  response.send("Hello, Your POST request has arrived.");
});

app.listen(port, () => {
  console.log(`Server ajillaj start http://localhost:${port}`);
});
