export default function Header({ handleNewProduct }) {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="container ">
        <header className="h-[130px] border border-grey rounded-[20px] flex items-center justify-between p-2 bg-blue-300">
          <img
            className="w-[100px] h-[100px] rounded-[20px]"
            src="./logo.png"
            alt=""
          />
          <input
            name=""
            placeholder="search"
            className="w-[500px] border border-grey rounded-[10px]"
            type="text"
          />
          <button onClick={handleNewProduct} className="btn mr-[20px]">
            Add new product
          </button>
        </header>
      </div>
    </div>
  );
}
