import profilePic from "../assets/img/Ashwani-Singh.jpg";
import { FaPlus } from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-full sm:px-40 px-10 bg-gray-900 text-white ">
      <div className="h-full grid grid-cols-4 gap-10 ">
        {/* Profile section */}
        <div className="row-span-4 col-span-2 bg-gray-800  rounded-2xl relative">
          <div className="flex items-center justify-center gap-10">
            {/* Profile Image  */}
            <div className=" p-5 rounded-xl ">
              <img src={profilePic} alt="" className="h-[300px] rounded-2xl object-cover hover:opacity-80 opacity-70 " />
            </div>
            {/* Profile Intro */}
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-md">A FRONTEND DEVELOPER</p>
              </div>
              <div>
                <h2 className="text-5xl font-bold">
                  Ashwani <br /> Singh
                </h2>
              </div>
              <div>
                <p className="text-md">I am a Frontend Developer</p>
              </div>
            </div>
          </div>
          {/* Add icon */}
          <div className="absolute right-6 bottom-6 border-gray-600 border-1 rounded-2xl p-2 cursor-pointer">
            <FaPlus className="text-gray-400" />
          </div>
        </div>
        <div className="col-span-2  bg-gray-500 rounded-xl">2</div>
        <div className="bg-gray-500  rounded-xl">3</div>
        <div className="bg-gray-500  rounded-xl">4</div>
        <div className="bg-gray-500  rounded-xl">5</div>
        <div className="bg-gray-500  rounded-xl">6</div>
        <div className="bg-gray-500  rounded-xl">7</div>
        <div className="bg-gray-500  rounded-xl">8</div>
        <div className="bg-gray-500  rounded-xl">9</div>
        <div className="bg-gray-500  rounded-xl">10</div>
        <div className="bg-gray-500  rounded-xl">11</div>
        <div className="bg-gray-500  rounded-xl">12</div>
      </div>
    </div>
  );
};

export default Home;
