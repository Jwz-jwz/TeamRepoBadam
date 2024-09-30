"use client";

import { useEffect, useState } from "react";
import { CloseIcon } from "../svg/CloseIcon";
import { ProductCard } from "./ProductCard";

export default function AddNewProduct({ addPro, handleNewProduct }) {
  const BACKEND_ENDPOINT = "http://localhost:7777";
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleOnSubmit = async (event) => {
    const userData = {
      productName: event.target.productName.value,
      category: category,
      price: event.target.price.value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const response = await fetch(`${BACKEND_ENDPOINT}/product`, options);
    const data = await response.json();
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/products`);
      const data = await response?.json();
      setProducts(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div
        className={`${
          addPro ? "flex" : "hidden"
        } w-[597px] h-[484px] flex flex-col rounded-[20px] border border-[#F4F4F4] mt-[100px]`}
      >
        <div className="flex gap-[140px] px-6 py-4">
          <button onClick={handleNewProduct}>
            <CloseIcon />
          </button>
          <h1 className="text-[24px] leading-[31.2px] font-[700]">
            Бараа үүсгэх
          </h1>
        </div>
        <form onSubmit={handleOnSubmit} className="flex flex-col gap-4 p-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-[14px] leading-[19.6px] font-[400]">
              Барааны нэр
            </h1>
            <input
              name="productName"
              type="text"
              placeholder="Product name"
              className="input input-bordered w-[539px] bg-[#F4F4F4] border-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[14px] leading-[19.6px] font-[400]">
              Барааны ангилал
            </h1>
            <select
              value={""}
              onChange={handleCategory}
              className="select w-[537px]  clear-start text-gray-400 bg-[#F4F4F4]"
            >
              <option disabled selected>
                Ангилал
              </option>
              <option value="tsamts">Цамц</option>
              <option value="Pants">Өмд</option>
              <option value="Outer">Гадуур хувцас</option>
              <option value="shoes">Гутал</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[14px] leading-[19.6px] font-[400]">Үнэ</h1>
            <input
              name="price"
              type="text"
              placeholder="Price"
              className="input input-bordered w-[539px] bg-[#F4F4F4] border-none"
            />
          </div>
          <div className="flex justify-end gap-4 p-6 mr-[10px]">
            <button className="btn">Буцах</button>
            <button onClick={handleNewProduct} type="submit" className="btn">
              Үүсгэх
            </button>
          </div>
        </form>
      </div>

      <div className="container flex gap-[20px] mt-[30px] flex-wrap">
        {products.map((data) => (
          <ProductCard
            key={data.id}
            name={data.name}
            angilal={data.angilal}
            price={data.price}
          />
        ))}
      </div>
    </div>
  );
}
