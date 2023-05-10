import { FiGithub } from "react-icons/fi";
import Link from "next/link";
import React from "react";

const Ribbon = () => {
  return (
    <div className="relative left-0 top-0 cursor-pointer bg-slate-400">
      <Link
        target="_blank"
        href="https://persistventures.com/"
        className="cursor-pointer"
      >
        <FiGithub
          size={30}
          className="mt-2 hover:animate-bounce cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default Ribbon;
/*      <div
        class="absolute px-8 transform -rotate-45 bg-blue-600 
          item-center justify-center text-white font-semibold py-1 left-[-30px]
           top-[-3px] w-[100px]"
      >
        <Link href="https://persistventures.com/" className="cursor-pointer">
          <FiGithub
            size={30}
            className="mt-2 hover:animate-bounce cursor-pointer"
          />
        </Link>
      </div>
*/
