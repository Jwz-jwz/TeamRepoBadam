import { CancelIcon } from "./CancelIcon";

export const CreateP = ({ handleVisible }) => {
  return (
    <div className=" w-[587px] h-[484px] bg-white rounded-3xl absolute">
      <div className="h-[64px] flex justify-around items-center border-b border-b-zinc-200 ">
        <button className="justify-start">
          <CancelIcon />
        </button>
        <p className="font-bold text-2xl ">Бараа үүсгэх</p>
        <div></div>
      </div>

      <div className=" flex flex-col justify-center items-center gap-[16px] p-[24px] ">
        <div>
          <p>Барааны нэр</p>
          <input
            type="text"
            className="w-[539px] h-[56px] bg-[#F4F4F4] rounded-xl"
          />
        </div>

        <div>
          <p>Барааны ангилал</p>
          <select className="select w-[539px] clear-start text-gray-400 bg-[#F4F4F4] h-[56px] rounded-xl">
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
            type="text"
            className="w-[539px] h-[56px] bg-[#F4F4F4] rounded-xl"
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
        <button className=" w-[90px] h-[40px] shadow-xl rounded-md bg-stone-800 text-white">
          Үүсгэх
        </button>
      </div>
    </div>
  );
};
