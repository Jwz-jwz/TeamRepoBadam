import express from "express";
const port = 3000;
const app = express();
app.get("/", (request, response) => {
  response.send("hello tanii GET huselt irlee");
});
// server.get("/api", (request, response) => {
//   response.send("hello tanii /api path ruu GET huselt irlee");
// });
app.post("/", (request, response) => {
  response.send("hello tanii POST huselt irlee");
});

app.listen(port, () => {
  app.put("/", () => {});

  console.log(`server ajillaj ehelle http://localhost:${port}`);
});
