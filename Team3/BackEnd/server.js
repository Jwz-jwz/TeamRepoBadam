import express from "express";
import bodyParser from "body-parser";

const port = 8000;
const app = express();

const users = [
  {
    id: 1,
    name: "Boloro",
    password: "12345678",
  },
];

app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.send("Hello, GET request just arrived.");
});

app.post("/sign-in", (request, response) => {
  const { name, password } = request.body;

  const registeredUser = users.filter(
    (user) => user.name === name && user.password === password
  );

  if (registeredUser.length > 0) {
    response.json({
      success: true,
    });
  } else {
    response.json({
      success: false,
    });
  }
});

app.post("/sign-up", (request, response) => {
  users.push(request.body);

  response.send("User successfully signed up");
});

app.listen(port, () => {
  console.log(`Server is working http://localhost:${port}`);
});
