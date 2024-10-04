"use client";
import { useEffect, useState } from "react";
import Header from "./Header";
import AddNewProduct from "./NewProduct";

export const HomePageMain = () => {
  const BACKEND_ENDPOINT = "https://teamrepobadam-crud-project.onrender.com";

  const [addPro, setAddPro] = useState(false);
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);

  const handleNewProduct = () => {
    setAddPro(!addPro);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      const productData = {
        productName: event.target.productName.value,
        category: category,
        price: event.target.price.value,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      };

      const response = await fetch(`${BACKEND_ENDPOINT}/product`, options);
      const data = await response.json();

      setProducts((prev) => [...prev, data?.product]);
    } catch {
      console.log("aldaa garlaa");
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/products`);
      const data = await response?.json();
      setProducts(data?.products);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const deleteProduct = async (e) => {
    const productData = {
      id: e.productId,
    };

    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    };

    const response = await fetch(`${BACKEND_ENDPOINT}/product`, options);
    const data = await response.json();
    setProducts(data?.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="relative">
      <div className="">
        <Header handleNewProduct={handleNewProduct} />
      </div>
      <div className="">
        <AddNewProduct
          addPro={addPro}
          handleNewProduct={handleNewProduct}
          handleCategory={handleCategory}
          handleOnSubmit={handleOnSubmit}
          deleteProduct={deleteProduct}
          products={products}
        />
      </div>
    </div>
  );
};
