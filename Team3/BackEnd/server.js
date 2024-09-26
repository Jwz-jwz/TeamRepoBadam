import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";

const port = 8000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

const users = [
  {
    id: 1,
    name: "Boloro",
    password: "12345678",
  },
];

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
  const { name, email, password } = request.body;

  fs.readFile("./data/user.json", "utf-8", (readError, data) => {
    if (readError) {
      response.json({
        success: false,
        error: error,
      });
    }

    let savedData = JSON.parse(data);

    const newUser = {
      id: Date.now().toString(),
      name: name,
      email: email,
      password: password,
    };
    savedData.push(newUser);

    fs.writeFile("./data/user.json", JSON.stringify(savedData), () => {
      if (readError) {
        response.json({
          success: false,
          error: error,
        });
      } else {
        response.json({
          success: true,
          user: newUser,
        });
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Server is working http://localhost:${port}`);
});
