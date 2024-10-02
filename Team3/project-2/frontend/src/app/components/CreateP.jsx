"use client";
import { CancelIcon } from "./CancelIcon";
import { useState } from "react";
export const CreateP = ({ handleVisible }) => {
  const BACKEND_ENDPOINT = "http://localhost:8888/Product";

  const [product, setProductData] = useState({
    productName: "",
    category: "",
    price: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    };

    const response = await fetch(BACKEND_ENDPOINT, options);
    const data = await response.json();
  };

  return (
    <div className=" w-[587px] h-[484px] bg-white rounded-3xl absolute top-2 ">
      <div className="h-[64px] flex justify-around items-center border-b border-b-zinc-200 ">
        <button className="justify-start">
          <CancelIcon />
        </button>
        <p className="font-bold text-2xl ">Бараа үүсгэх</p>
        <div></div>
      </div>

      <div className="  flex flex-col justify-center items-center gap-[16px] p-[24px] ">
        <div>
          <p>Барааны нэр</p>
          <input
            type="text"
            name="productName"
            onChange={handleOnChange}
            className="w-[539px] h-[56px] bg-[#F4F4F4] rounded-xl"
          />
        </div>

        <div>
          <p>Барааны ангилал</p>
          <select
            name="category"
            onChange={handleOnChange}
            className="select w-[539px] clear-start text-gray-400 bg-[#F4F4F4] h-[56px] rounded-xl"
          >
            <optgroup label="Ангилал">
              <option value="Shirt">Цамц</option>
              <option value="Pants">Өмд</option>
              <option value="Outer">Гадуур хувцас</option>
              <option value="Shoes">Гутал</option>
            </optgroup>
          </select>
        </div>

        <div>
          <p>Үнэ</p>
          <input
            name="price"
            type="text"
            className="w-[539px] h-[56px] bg-[#F4F4F4] rounded-xl"
            onChange={handleOnChange}
          />
        </div>
      </div>

      <div className="h-[88px] flex justify-end pr-[24px] items-center border-t border-t-zinc-200 gap-[16px]">
        <button
          className=" w-[70px] h-[40px] shadow-xl rounded-md"
          onClick={handleVisible}
        >
          Буцах
        </button>
        <form action="" onSubmit={handleOnSubmit}>
          <button className=" w-[90px] h-[40px] shadow-xl rounded-md bg-stone-800 text-white">
            Үүсгэх
          </button>
        </form>
      </div>
    </div>
  );
};
