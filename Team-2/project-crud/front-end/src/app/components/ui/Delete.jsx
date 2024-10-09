export const Delete = ({
  selectedProduct,
  handleSubmit,
  handleInputChange,
  setSelectedProduct,
  product,
}) => {
  const handleDelete = async (id) => {
    try {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      };
      const response = await fetch(`${BACKEND_ENDPOINT}/product`, options);
      const data = await response.json();

      setProducts((prevProducts) =>
        prevProducts.filter((product) => data?.product?.id !== product?.id)
      );
    } catch {
      console.log("error");
    }
    document.getElementById("my_modal_2").close();
  };

  return (
    <main className="">
      <button className="btn" onClick={handleModalClick}>
        Edit
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Delete product</h3>

          <button className="mt-4 btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </dialog>
    </main>
  );
};
