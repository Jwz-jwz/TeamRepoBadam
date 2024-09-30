import { CloseIcon } from "../svg/CloseIcon";

export const NewProduct = ({ addProduct, handleNewProduct }) => {
  return (
    <div
      className={`${
        addProduct ? "flex" : "hidden"
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
      <div className="flex flex-col gap-4 p-6">
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
          <select className="select w-[537px]  clear-start text-gray-400 bg-[#F4F4F4]">
            <option disabled selected>
              Ангилал
            </option>
            <option>Цамц</option>
            <option>Өмд</option>
            <option>Гадуур хувцас</option>
            <option>Гутал</option>
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
      </div>
      <div className="flex justify-end gap-4 p-6 mr-[10px]">
        <button className="btn btn-error">Буцах</button>
        <button onClick={handleNewProduct} className="btn btn error">
          Үүсгэх
        </button>
      </div>
    </div>
  );
};
