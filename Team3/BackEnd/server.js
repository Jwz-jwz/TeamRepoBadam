import express from "express";
import bodyParser from "body-parser";

const port = 8888;
const app = express();

app.use(bodyParser.json());

const users = [
  {
    id: 1,
    name: "Boloro1",
    password: "Anypass1",
    email: "b1@nest.edu.mn",
  },
  {
    id: 2,
    name: "Boloro2",
    password: "Anypass2",
    email: "b2@nest.edu.mn",
  },
  {
    id: 3,
    name: "Boloro3",
    password: "Anypass3",
    email: "b3@nest.edu.mn",
  },
];

app.get("/", (request, response) => {
  response.send("Hello, Your GET request has arrived.");
});

app.post("/sign-in", (request, response) => {
  const { name, password } = request.body;

  const registeredUser = users.filter(
    (user) => user.name === name && user.password === password
  );

  if (registeredUser.length > 0) {
    response.send("Successfully singed in");
  } else {
    response.send("User not found.");
  }
});

app.listen(port, () => {
  console.log(`Server ajillaj start http://localhost:${port}`);
});
