import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="items-center justify-center max-w-2xl sm:mx-auto">
      <Image
        src="/projimage.avif"
        alt="image"
        width={1500}
        height={40}
        className="rounded-lg  object-center shadow-xl hover:scale-110 ease-in duration-500"
      />
    </div>
  );
};

export default Navbar;
/*    


*/
