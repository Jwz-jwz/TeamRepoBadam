"use client";
import { useState, useEffect } from "react";
import { CreateModal } from "./ui/CreateModel";

const CreateNewProduct = ({}) => {
  const BACKEND_ENDPOINT = "http://localhost:7777";
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [visible, setVisible] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/products`);
      const responseData = await response.json();
      setProducts(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleVisible = () => {
    setVisible(!visible);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      name: event.target.name.value,
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

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-slate-50">
      <div className="container ">
        <header className="h-[130px] border border-grey rounded-[20px] flex items-center justify-between p-2 bg-blue-200 ">
          <img
            className="w-[100px] h-[100px] rounded-[20px]"
            src="./logo.png"
            alt=""
          />
          <input
            name=""
            placeholder="Search"
            className="w-[500px] h-[50px] border border-grey rounded-[10px] pl-4"
            type="text"
          />
          <button onClick={handleVisible} className="btn mr-[20px] btn-outline">
            Add new product
          </button>
        </header>
      </div>
      <div
        className={`${
          visible ? "flex" : "hidden"
        } w-[597px] h-[484px] flex flex-col items-center justify-center rounded-[20px] border border-gray-600 mt-[100px]`}
      >
        <div className="flex gap-[140px] px-6 py-4">
          <h1 className="text-[24px] leading-[31.2px] font-[700] text-black">
            Бараа үүсгэх
          </h1>
        </div>
        <form onSubmit={handleOnSubmit} className="flex flex-col gap-4 p-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-[14px] leading-[19.6px] text-black font-[400]">
              Барааны нэр
            </h1>
            <input
              name="name"
              type="text"
              placeholder="Product name"
              className="input input-bordered w-[539px] bg-[#F4F4F4] text-black border-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[14px] leading-[19.6px] text-black font-[400]">
              Үнэ
            </h1>
            <input
              name="productName"
              type="text"
              placeholder="productName"
              className="input input-bordered w-[539px] text-black bg-[#F4F4F4] border-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[14px] leading-[19.6px] text-black font-[400]">
              Барааны ангилал
            </h1>
            <select
              value={""}
              onChange={handleCategory}
              className="select w-[537px]  clear-start text-black bg-[#F4F4F4]"
              defaultValue={""}
            >
              <option disabled value={""}>
                Ангилал
              </option>
              <option value="tsamts">Цамц</option>
              <option value="Pants">Өмд</option>
              <option value="Outer">Гадуур хувцас</option>
              <option value="shoes">Гутал</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[14px] leading-[19.6px] text-black font-[400]">
              Үнэ
            </h1>
            <input
              name="price"
              type="text"
              placeholder="Price"
              className="input input-bordered w-[539px] text-black bg-[#F4F4F4] border-none"
            />
          </div>
          <div className="flex justify-end gap-4 p-6 mr-[10px]"></div>
          <button
            className="btn btn-outline btn-primary"
            onClick={handleVisible}
          >
            Burtgeh
          </button>
        </form>
        {/* <div className="flex justify-end ">
          <CreateModal />
        </div>
        <div className="flex flex-wrap justify-between gap-5 mt-6">
          {products?.map((product) => {
            return <Card key={product?.id} product={product} />;
          })}
        </div> */}
      </div>
    </div>
  );
};

export default CreateNewProduct;
