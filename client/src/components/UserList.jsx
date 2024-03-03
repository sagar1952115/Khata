import React from "react";
import { Link } from "react-router-dom";

const UserList = ({ user }) => {
  return (
    <Link
      to="/user/2"
      className="py-5 shadow-md flex justify-between rounded-md text-white p-4 font-bold bg-indigo-500"
    >
      <div>{user.name}</div>
      <div className=" rounded-md   text-white px-2">Rs. {user.amount}</div>
    </Link>
  );
};

export default UserList;
