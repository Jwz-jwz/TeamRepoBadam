"use client";
import { useState } from "react";
import Header from "./Header";
import AddNewProduct from "./NewProduct";

export const HomePageMain = () => {
  const [addPro, setAddPro] = useState(false);

  const handleNewProduct = () => {
    setAddPro(!addPro);
  };
  return (
    <div className="relative">
      <div className="">
        <Header addPro={addPro} handleNewProduct={handleNewProduct} />
      </div>
      <div className="">
        <AddNewProduct addPro={addPro} handleNewProduct={handleNewProduct} />
      </div>
    </div>
  );
};
