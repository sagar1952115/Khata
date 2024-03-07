import React from "react";

const AmountInputModal = ({ buttonType, onclick, handleModalClick }) => {
  return (
    <>
      {" "}
      <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm">
        lorem
      </div>
      <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        {/* <div class="bg-white flex flex-col items-center justify-center w-2/3 p-6 rounded-lg shadow-lg">
          <input type="number" className="appearance-none" />
          <input type="text" />
          <button>Add</button>
        </div> */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50"></div>
        <div className="bg-white w-2/3 flex items-center justify-center flex-col p-6 rounded-lg shadow-lg z-10 relative">
          <button
            onClick={() => handleModalClick(false)}
            className="absolute top-0 right-0 p-2"
            onclick="closeModal()"
          >
            X
          </button>
          <h2 class="text-2xl font-bold mb-4">Add Data</h2>
          <input
            type="number"
            placeholder="Rs. 0"
            // style="-moz-appearance: textfield;"
            className="w-full outline-none  remove-arrow py-2 font-extrabold text-4xl text-center px-3 text-gray-700 border-b mb-8"
          />
          <input
            type="text"
            placeholder="Description"
            className="w-full  py-2 px-3 text-gray-700 border-b rounded mb-8"
          />
          <button
            class={` ${
              buttonType === "Take"
                ? "bg-green-500 hover:bg-green-700"
                : "bg-red-500 hover:bg-red-700"
            } text-white font-bold py-2 px-4 rounded`}
          >
            {buttonType}
          </button>
        </div>
      </div>
    </>
  );
};

export default AmountInputModal;
