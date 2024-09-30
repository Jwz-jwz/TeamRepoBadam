import { useState } from "react";
import { DeleteIcon } from "../svg/DeleteIcon";
import { EditIcon } from "../svg/Editicon";
import { EditProduct } from "./EditProduct";

export const ProductCard = ({ product }) => {
  const { productName, category, price } = product;

  const [isEdit, setIsEdit] = useState(false);

  const showEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div className="w-[364px] rounded-[20px] flex flex-col gap-4 p-6 border border-[#F4F4F4] bg-pink-100">
      <div className="flex justify-between">
        <p>Барааны нэр: {productName}</p>
        <div className="flex gap-2 items-center">
          <button>
            <DeleteIcon />
          </button>
          <button onClick={showEdit}>
            <EditIcon />
          </button>
        </div>
      </div>
      <p>Барааны ангилал: {category}</p>
      <p>Барааны үнэ: {price}</p>
      <div className={`${isEdit ? "flex" : "hidden"}`}>
        <EditProduct showEdit={showEdit} product={product} />
      </div>
    </div>
  );
};
