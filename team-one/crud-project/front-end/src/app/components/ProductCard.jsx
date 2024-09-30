import { DeleteIcon } from "../svg/DeleteIcon";
import { EditIcon } from "../svg/Editicon";

export const ProductCard = ({ name, angilal, price }) => {
  return (
    <div className="w-[364px] rounded-[20px] flex flex-col gap-4 p-6 border border-[#F4F4F4] bg-pink-100">
      <div className="flex justify-between">
        <p>Барааны нэр: {name}</p>
        <div className="flex gap-2 items-center">
          <button>
            <DeleteIcon />
          </button>
          <button>
            <EditIcon />
          </button>
        </div>
      </div>
      <p>Барааны ангилал: {angilal}</p>
      <p>Барааны үнэ: {price}</p>
    </div>
  );
};
