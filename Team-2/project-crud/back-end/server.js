import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import cors from "cors";

const port = 5555;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.get("/", (request, response) => {
  response.send("Hello tanii get huselt irlee");
});

app.post("/", (request, response) => {
  const { name, angilal, price } = request.body;
  fs.readFile("./data/user.json", "utf-8", (readError, data) => {
    let savedData = data ? JSON.parse(data) : [];

    if (readError) {
      response.json({
        success: false,
        error: error,
      });
    }

    const newUser = {
      id: Date.now().toString(),
      name: name,
      category: category,
      price: price,
    };
    savedData.push(newUser);

    fs.writeFile("./data/user.json", JSON.stringify(savedData), (error) => {
      if (error) {
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
  console.log(`server ajillaj ehelle http://localhost:${port}`);
});
