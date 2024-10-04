import { useState } from "react";
import { BACKEND_ENDPOINT } from "../constants/constant";

export const EditModal = ({ product: productProps }) => {
  const BACKEND_ENDPOINT = "http://localhost:7777";
  const [product, setProduct] = useState(productProps);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    };
    await fetch(`${BACKEND_ENDPOINT}/product`, options);
    document.getElementById("my_modal_2").close();
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setProduct((prevProduct) => {
      return {
        ...prevProduct,
        [name]: value,
      };
    });
  };

  return (
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Edit
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Edit product</h3>
          <div className="flex flex-col gap-3 mt-4">
            <input
              name="productName"
              onChange={handleInputChange}
              type="text"
              placeholder="Type here"
              className="w-full input input-bordered"
              value={product?.productName}
            />
            <input
              name="category"
              onChange={handleInputChange}
              type="text"
              placeholder="Type here"
              className="w-full input input-bordered"
              value={product?.category}
            />
            <input
              name="price"
              onChange={handleInputChange}
              type="text"
              placeholder="Type here"
              className="w-full input input-bordered"
              value={product?.price}
            />
          </div>

          <button className="mt-4 btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </dialog>
    </>
  );
};
