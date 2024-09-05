const Navbar = () => {
  return (
    <nav className="bg-[#121212] py-3">
      <div className="flex flex-row justify-between items-center w-[80%] mx-auto ">
        <div className="flex flex-row space-x-16">
          <div className="flex flex-col text-yellow-500">
            <h1 className="text-lg leading-4">ALLABOUT</h1>
            <h1 className="text-2xl leading-5 font-semibold">MOVIES</h1>
          </div>
          <button className="text-lg text-yellow-500 hover:underline">
            EXPLORE
          </button>
        </div>
        <div className="">
          <input
            placeholder="Search..."
            className="w-[300px] h-[35px] outline-none px-2 rounded-md bg-black text-[#c2c2c2] text-lg placeholder:text-[#646464]"
            type="text"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
