"use client";

import { useState } from "react";
import { CreateP } from "./CreateP";

export const Header = () => {
  const [visible, setVisible] = useState(false);
  const handleVisible = () => {
    setVisible(!visible);
  };
  return (
    <div className=" flex justify-center p-4 bg-stone-800 gap-5">
      <div className="flex justify-around items-center w-[800px] h-[80px] bg-white rounded-2xl">
        <div>
          <input type="text" className="bg-stone-500 rounded-2xl" />
        </div>
        <button onClick={handleVisible}>Add new product</button>
        {visible ? (
          <CreateP handleVisible={handleVisible} />
        ) : (
          <div className="hidden"></div>
        )}
      </div>
    </div>
  );
};
