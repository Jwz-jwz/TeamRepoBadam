export const Header = () => {
  return (
    <div className=" flex justify-center p-4 bg-stone-800 gap-5">
      <div className="flex justify-around items-center w-[800px] h-[80px] bg-white rounded-2xl">
        <div>ds</div>
        <div>
          <input type="text" className="bg-stone-500 rounded-2xl" />
        </div>
        <button>Add new product</button>
      </div>
    </div>
  );
};
