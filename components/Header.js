import React from "react";
import { BiSearch } from "react-icons/bi";
import { GiPolarStar } from "react-icons/gi";
import Link from "next/link";
import Ribbon from "./ribbon";
import MyModal from "./Modal";

const Header = () => {
  return (
    <>
      <Ribbon />
      <div className="sticky top-0 justify-between flex py-10 bg-transparent bg-gray-20">
        <div className=" flex items-center px-20">
          <div>
            {" "}
            <GiPolarStar size={50} className="text-yellow-400 cursor-pointer" />
          </div>
          <div className="text-l font-semibold cursor-pointer">
            Redefine Status
          </div>
        </div>
        <div className="sticky flex items-center px-20 cursor-pointer hover:rounded-xl hover:bg-gray-200 hover:text-black">
          <div>
            <BiSearch className="" />
          </div>
          <div className="text-semibold text-md">
            <MyModal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
//      <div class="relative overflow-hidden w-56 h-56 bg-white border"></div>
/*      

        <div className="right-0 top-0 sticky cursor-pointer ">
          <div
            class="absolute px-8 transform rotate-45 bg-blue-600 item-center justify-center text-white font-semibold py-1 
          right-[-5px] top-[0px] bottom-[0px] w-[100px] h-[42px]"
          >
            <FiGithub
              size={30}
              className="mb-0 mt-2 items-center hover:animate-bounce"
            />
          </div>
        </div>


        https://redefinestatus.com/

*/
