import profilePic from "../assets/img/Ashwani-Singh.jpg";
// import gmailIcon from "../assets/img/icon.png";
// import { FaPlus } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Home = () => {
  return (
    <div className="w-full sm:px-40 px-10  text-white ">
      <div className="h-full grid grid-cols-4 gap-10 items-center justify-center">
        {/* Profile section */}
        <div className="row-span-4 col-span-2 bg-gray-700  rounded-2xl relative">
          <div className="flex items-center justify-center gap-10">
            {/* Profile Image  */}
            <div className=" p-5 rounded-xl ">
              <img
                src={profilePic}
                alt=""
                className="h-[250px] rounded-2xl object-cover hover:opacity-90 opacity-80 "
              />
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
          {/* <div className="absolute right-6 bottom-6 border-gray-600 border-1 rounded-2xl p-2 cursor-pointer">
            <FaPlus className="text-gray-400" />
          </div> */}
        </div>
        <div className="col-span-2  bg-gray-700 rounded-xl">
          <div className="flex items-center justify-evenly gap-4 p-4">
            <div className="text-xl font-semibold">
              <h3>Social Media Links</h3>
            </div>

            <div>
              <ul className="flex items-center justify-center gap-8">
                <li>
                  <FaInstagram className="text-3xl hover:text-red-500 cursor-pointer" />
                </li>
                <li>
                  <FaLinkedin className="text-3xl hover:text-blue-600 cursor-pointer" />
                </li>
                <li>
                  <FaGithub className="text-3xl hover:text-black cursor-pointer" />
                </li>
                <li className="items-center">
                  {/* <img src={gmailIcon} alt="" className="w-[45px] h-[45px] " /> */}
                  <SiGmail className="text-3xl hover:text-red-500 cursor-pointer"/>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gray-700  rounded-xl">3</div>
        <div className="bg-gray-700  rounded-xl">4</div>
        <div className="bg-gray-700  rounded-xl">5</div>
        <div className="bg-gray-700  rounded-xl">6</div>
        <div className="bg-gray-700  rounded-xl">7</div>
        <div className="bg-gray-700  rounded-xl">8</div>
        <div className="bg-gray-700  rounded-xl">9</div>
        <div className="bg-gray-700  rounded-xl">10</div>
        <div className="bg-gray-700  rounded-xl">11</div>
        <div className="bg-gray-700  rounded-xl">12</div>
      </div>
    </div>
  );
};

export default Home;
