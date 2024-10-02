"use client";
import { useState, useEffect } from "react";
import { EditProduct } from "./EditProduct";
import { NewProduct } from "./NewProduct";
import { ProductCard } from "./ProductCard";
import { CloseIcon } from "../svg/CloseIcon";
import { CreateModal } from "./ui/CreateModel";

export default function HomePage() {
  const BACKEND_ENDPOINT = "http://localhost:8888";
  const [products, setProducts] = useState([""]);
  const [category, setCategory] = useState("");

  //   const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/products`);
      const responseData = await response.json();
      setProducts(responseData?.products);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(products);
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleNewProduct = () => {
    setProducts(!products);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

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
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="container ">
        <header className="h-[130px] border border-grey rounded-[20px] flex items-center justify-between p-2 bg-blue-300">
          <img
            className="w-[100px] h-[100px] rounded-[20px]"
            src="./logo.png"
            alt=""
          />
          <input
            name=""
            placeholder="search"
            className="w-[500px] border border-grey rounded-[10px]"
            type="text"
          />
          <button onClick={handleNewProduct} className="btn mr-[20px]">
            Add new product
          </button>
        </header>
      </div>
      <div
        className={`${
          products ? "flex" : "hidden"
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
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
            <button type="submit" className="btn">
              <CreateModal />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// "use client";

// import { Card, CreateModal, EditModal } from "@/components/ui";
// import { BACKEND_ENDPOINT } from "@/constants/constant";
// import { useEffect, useState } from "react";

// export default function Home() {
//   const [products, setProducts] = useState([]);

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch(`${BACKEND_ENDPOINT}/products`);
//       const responseData = await response.json();
//       setProducts(responseData?.products);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleOnSubmit = async (event) => {
//     event.preventDefault();

//     const userData = {
//       name: event.target.name.value,
//       password: event.target.password.value,
//     };

//     const options = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     };

//     const response = await fetch(BACKEND_ENDPOINT, options);
//     const data = await response.json();
//   };

//   return (
//     <div className="flex justify-center w-full p-6">
//       <div className="max-w-[1200px]">
//         <div className="flex justify-end ">
//           <CreateModal />
//         </div>
//         <div className="flex flex-wrap justify-between gap-5 mt-6">
//           {products?.map((product) => {
//             return <Card key={product?.id} product={product} />;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
