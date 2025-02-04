const Navbar = () => {
  return (
    <div className="w-full sm:px-40 px-10 py-8 bg-gray-900 text-white mb-10"> 
      <div className="flex items-center justify-between h-full  "> 
        <div>
          <h2 className="text-2xl font-bold cursor-pointer">Ashwani Singh</h2>
        </div>
        <div>
          <ul className="flex items-center gap-6">
            <li className="cursor-pointer hover:text-gray-400 hover:underline text-xl font-semibold">Home</li>
            <li className="cursor-pointer hover:text-gray-400 hover:underline text-xl font-semibold">About</li>
            <li className="cursor-pointer hover:text-gray-400 hover:underline text-xl font-semibold">Work</li>
            <li className="cursor-pointer hover:text-gray-400 hover:underline text-xl font-semibold">Contact</li>
          </ul>
        </div>
        <div>
          <button className="px-6 py-2 rounded-xl text-xl border-2 font-semibold border-white hover:bg-gray-600 bg-gray-700 transition">
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
