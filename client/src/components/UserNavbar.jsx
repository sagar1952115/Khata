import React from "react";
import { HiCurrencyRupee } from "react-icons/hi";

const UserNavbar = ({ name, amount }) => {
  return (
    <div className="flex items-center justify-between p-5 font-bold text-slate-500 text-xl">
      <div className="l">{name}</div>
      <div className="flex border min-w-24 p-1 px-2 rounded-full justify-between items-center">
        <div>
          <HiCurrencyRupee color="yellow" size="40px" />
        </div>
        <div>{amount}</div>
      </div>
    </div>
  );
};

export default UserNavbar;
