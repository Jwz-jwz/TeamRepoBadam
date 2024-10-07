import { DeleteButton } from "./DeleteModal";
import { EditModal } from "./EditModal";

export const Card = ({ product }) => {
  const { productName, category, price } = product;
  return (
    <div class="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{productName}</h2>
        <div className="flex justify-between">
          <p>{category}</p>
          <p>{price}</p>
        </div>
      </div>
      <div className="justify-end p-4 pt-0 card-actions">
        <EditModal product={product} />
        <DeleteIcon />
      </div>
    </div>
  );
};
