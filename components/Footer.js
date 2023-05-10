import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";

const Footer = () => {
  return (
    <div className=" bg-transparent pt-15 flex px-20 pb-5 justify-between">
      <div className="pt-10 text-sm">Copyright 2022 | Redefine status</div>
      <div className="item-center pt-10">
        <DarkModeSwitch />
      </div>
    </div>
  );
};

export default Footer;
