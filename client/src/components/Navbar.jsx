import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className=" left-0 right-0 flex text-lg justify-between items-center border p-5 ">
      <div className="text-indigo-500 font-bold">Khata</div>
      <div>
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
