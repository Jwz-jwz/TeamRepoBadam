import { useState } from "react";
import { CloseIcon } from "../svg/CloseIcon";

export const EditProduct = ({ showEdit, product, isEdit }) => {
  const BACKEND_ENDPOINT = "http://localhost:7777";
  const [editProduct, setEditProduct] = useState(product);

  const editedProduct = async (event) => {
    event.preventDefault();

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editProduct),
    };

    const response = await fetch(`${BACKEND_ENDPOINT}/product`, options);
    showEdit(!isEdit);
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setEditProduct((prevProduct) => {
      return {
        ...prevProduct,
        [name]: value,
      };
    });
  };

  return (
    <div className="w-[597px] h-[484px] flex flex-col rounded-[20px] border border-[#F4F4F4] bg-green-100">
      <div className="flex gap-[140px] px-6 py-4">
        <button onClick={showEdit}>
          <CloseIcon />
        </button>
        <h1 className="text-[24px] leading-[31.2px] font-[700]">Бараа засах</h1>
      </div>
      <form className="flex flex-col gap-4 p-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-[14px] leading-[19.6px] font-[400]">
            Барааны нэр :
          </h1>
          <input
            name="productName"
            placeholder={product?.productName}
            onChange={handleInputChange}
            type="text"
            className="input input-bordered w-[539px] bg-[#F4F4F4] border-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[14px] leading-[19.6px] font-[400]">
            Барааны ангилал
          </h1>
          <select
            placeholder={product?.category}
            onChange={handleInputChange}
            className="select w-[537px]  clear-start text-gray-400 bg-[#F4F4F4]"
          >
            <option disabled selected>
              Ангилал
            </option>
            <option value={"tsamts"}>Цамц</option>
            <option value={"Pants"}>Өмд</option>
            <option value={"Outer"}>Гадуур хувцас</option>
            <option value={"Shoes"}>Гутал</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[14px] leading-[19.6px] font-[400]">Үнэ</h1>
          <input
            placeholder={product?.price}
            name="price"
            onChange={handleInputChange}
            type="text"
            className="input input-bordered w-[539px] bg-[#F4F4F4] border-none"
          />
        </div>
      </form>
      <div className="flex justify-end gap-4 p-6 mr-[10px]">
        <button onClick={showEdit} className="btn">
          Буцах
        </button>
        <button onClick={editedProduct} className="btn">
          Засах
        </button>
      </div>
    </div>
  );
};
