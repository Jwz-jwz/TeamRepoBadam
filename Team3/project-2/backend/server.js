import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";
import { error } from "console";

const port = 8888;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("Hello GET huselt irlee");
});

app.get("/products", (request, response) => {
  fs.readFile("./data/products.json", "utf-8", (readError, data) => {
    if (readError) {
      response.json({
        success: false,
        error: error,
      });
    }
    let dbData = data ? JSON.parse(data) : [];

    response.json({
      success: true,
      products: dbData,
    });
  });
});

app.post("/product", (request, response) => {
  const { productName, category, price } = request.body;
  console.log("productName", productName, category, price);

  fs.readFile("./data/products.json", "utf-8", (readError, data) => {
    let savedData = data ? JSON.parse(data) : [];

    // console.log("savedData", savedData);

    if (readError) {
      response.json({
        status: false,
        error: error,
      });
    }

    const newProduct = {
      id: Date.now().toString(),
      productName: productName,
      category: category,
      price: price,
    };
    savedData.push(newProduct);

    fs.writeFile("./data/products.json", JSON.stringify(savedData), (error) => {
      if (error) {
        response.json({
          status: false,
          error: error,
        });
      } else {
        response.json({
          status: true,
          clothes: newProduct,
        });
      }
    });
  });
});

app.delete("/product", (request, response) => {
  const { id } = request.body;

  fs.readFile("./data/products.json", "utf-8", (readError, data, error) => {
    if (readError) {
      response.json({
        success: false,
        error: error,
      });
    }

    let dbData = data ? JSON.parse(data) : [];

    const filteredData = dbData.filter((data) => data?.id !== id);

    if (filteredData.length === dbData.length) {
      response.json({
        success: false,
        error: "Product id not found",
      });
    }

    fs.writeFile(
      "./data/products.json",
      JSON.stringify(filteredData),
      (error) => {
        if (error) {
          response.json({
            success: false,
            error: error,
          });
        } else {
          response.json({
            success: true,
            products: filteredData,
          });
        }
      }
    );
  });
});

app.put("/product", (request, response) => {
  const { id, productName, category, price } = request.body;

  fs.readFile("./data/products.json", "utf-8", (readError, data) => {
    if (readError) {
      response.json({
        success: false,
        error: error,
      });
    }

    let dbData = data ? JSON.parse(data) : [];

    const editedData = dbData.map((data) => {
      if (data?.id === id) {
        return {
          id,
          productName,
          category,
          price,
        };
      }
      return data;
    });

    fs.writeFile(
      "./data/products.json",
      JSON.stringify(editedData),
      (error) => {
        if (error) {
          response.json({
            success: false,
            error: error,
          });
        } else {
          response.json({
            success: true,
            products: editedData,
          });
        }
      }
    );
  });
});

app.listen(port, () => {
  console.log(`Server ajillaj bn http://localhost:${port}`);
});
