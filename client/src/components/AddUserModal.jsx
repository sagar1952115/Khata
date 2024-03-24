import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

const AddUserModal = ({
  buttonType,
  userData,
  setUserData,
  onclick,
  handleModalClick,
}) => {
  const [user, setUser] = useState("");
  const [desc, setDesc] = useState("");
  const [phone, setPhone] = useState("");

  const handleAddUser = () => {
    setUserData({ name: user, amount: 0 });
    handleModalClick(false);
  };
  return (
    <>
      <ToastContainer />
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm">
        lorem
      </div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        {/* <div classname="bg-white flex flex-col items-center justify-center w-2/3 p-6 rounded-lg shadow-lg">
          <input type="number" className="appearance-none" />
          <input type="text" />
          <button>Add</button>
        </div> */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50"></div>
        <div className="bg-white w-4/5 flex items-center justify-center flex-col p-6 rounded-lg shadow-lg z-10 relative">
          <button
            onClick={() => handleModalClick(false)}
            className="absolute top-0 right-0 p-2"
            onclick="closeModal()"
          >
            X
          </button>
          <h2 className="text-2xl font-bold mb-4">Add User</h2>
          <input
            value={user}
            onChange={(e) => setUser(e.target.value)}
            type="text"
            placeholder="Enter name"
            // style="-moz-appearance: textfield;"
            className="w-full outline-none  remove-arrow py-2 font-extrabold text-4xl text-center px-3 text-gray-700 border-b mb-8"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            placeholder="Enter your phone number"
            className="w-full remove-arrow py-2 px-3 text-gray-700 border-b rounded mb-8"
          />
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            placeholder="Description"
            className="w-full  py-2 px-3 text-gray-700 border-b rounded mb-8"
          />
          <button
            onClick={handleAddUser}
            className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded`}
          >
            {buttonType}
          </button>
        </div>
      </div>
    </>
  );
};

export default AddUserModal;
