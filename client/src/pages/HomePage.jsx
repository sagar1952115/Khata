import React, { useState } from "react";
import Navbar from "../components/Navbar";
import UserList from "../components/UserList";
import { userData } from "../data";

const HomePage = () => {
  const [users, setUsers] = useState(userData);
  const handleSearchChange = (e) => {
    console.log(e.target.value);
    const searchString = e.target.value;
    const res = userData.filter((user) =>
      user.name.toLowerCase().includes(searchString.toLowerCase())
    );
    console.log(res);
    setUsers(res);
  };
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex justify-between p-5">
          <input
            type="text"
            onChange={handleSearchChange}
            placeholder="Search User"
            className="border rounded-md px-2 p-1"
          />
          <div className="text-white bg-indigo-500 font-bold rounded-md px-4 p-1">
            Add
          </div>
        </div>
        <div className="p-5 flex flex-col gap-2">
          {users.map((user, i) => {
            return <UserList key={i} user={user} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
