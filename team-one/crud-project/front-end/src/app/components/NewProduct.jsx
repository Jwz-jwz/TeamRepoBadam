"use client";

import { useState } from "react";
import { CloseIcon } from "../svg/CloseIcon";
import { ProductCard } from "./ProductCard";

export default function AddNewProduct({ addPro, handleNewProduct }) {
  const BACKEND_ENDPOINT = "http://localhost:7777";
  const [category, setCategory] = useState("");
  const [resData, setResData] = useState([]);

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleOnSubmit = async (event) => {
    const userData = {
      name: event.target.name.value,
      angilal: category,
      price: event.target.price.value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const response = await fetch(BACKEND_ENDPOINT, options);
    const data = await response.json();
    setResData(data.user);
  };

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
              name="name"
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

      <div>
        {resData.map((data) => (
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
