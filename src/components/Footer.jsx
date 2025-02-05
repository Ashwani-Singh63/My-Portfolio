
const Footer = () => {
  return (
    <div className="w-full h-auto sm:px-40 px-10 py-10 text-white "> 
      <div className="flex items-center justify-between flex-col h-full gap-10  "> 
        <div>
          <h2 className="text-2xl  font-bold">Ashwani Singh</h2>
        </div>
        <div>
          <ul className="flex items-center gap-6">
            <li className="cursor-pointer hover:underline  hover:text-gray-400 text-xl ">Home</li>
            <li className="cursor-pointer hover:underline  hover:text-gray-400 text-xl ">About</li>
            <li className="cursor-pointer hover:underline  hover:text-gray-400 text-xl ">Work</li>
            <li className="cursor-pointer hover:underline  hover:text-gray-400 text-xl ">Contact</li>
          </ul>
        </div>
        <div>
          {/* <button className="px-6 py-2 rounded-xl text-xl border-2 font-semibold border-white hover:bg-white hover:text-gray-900 transition">
            Let&apos;s Talk
          </button> */}
          <p> &copy;All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
