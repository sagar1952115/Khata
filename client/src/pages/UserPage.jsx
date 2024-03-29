import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { paymentData as data } from "../data";
import TransactionCard from "../components/TransactionCard";
import AmountInputModal from "../components/AmountInputModal";
import UserNavbar from "../components/UserNavbar";

const UserPage = () => {
  const [paymentData, setPaymentData] = useState(data);
  const [openModal, setOpenModal] = useState(false);
  const [buttonType, setButtonType] = useState("");
  const [totalAmountPending, setTotalAmountPending] = useState(0);
  const calculateTotalAmountPending = () => {
    // console.log(paymentData.totalAmountPending);
    let totalAmountPending = 0;
    let totalInboundAmount = 0;
    let totalOutboundAmount = 0;
    for (let i = 0; i < paymentData.length; i++) {
      if (paymentData[i].payment === "inbound") {
        totalInboundAmount += paymentData[i].amount;
      } else {
        totalOutboundAmount += paymentData[i].amount;
      }
    }
    console.log(paymentData);
    console.log(totalOutboundAmount, totalInboundAmount);
    return totalOutboundAmount - totalInboundAmount;
  };
  let name = "Sagar";
  useEffect(() => {
    const amount = calculateTotalAmountPending();
    console.log(amount);
    setTotalAmountPending(amount);
  }, [paymentData]);
  return (
    <div>
      <Navbar />
      <UserNavbar name={name} amount={totalAmountPending} />

      <div className="mb-20 m-2 h-[700px]  overflow-auto">
        {paymentData.map((paymentData, i) => {
          return <TransactionCard paymentData={paymentData} />;
        })}
      </div>

      <div className="fixed shadow-inner py-3 bg-white bottom-0 left-0 gap-2 text-white flex justify-between p-2 items-center right-0">
        <button
          onClick={() => {
            setOpenModal(true);
            setButtonType("Take");
          }}
          className="bg-green-600 hover:bg-green-700 p-4 text-bold rounded-md w-1/2"
        >
          You Get
        </button>
        <button
          onClick={() => {
            setButtonType("Give");
            setOpenModal(true);
          }}
          className="bg-red-500 hover:bg-red-700 p-4 text-bold rounded-md w-1/2 "
        >
          You Give
        </button>
      </div>
      {openModal && (
        <AmountInputModal
          paymentData={paymentData}
          setPaymentData={setPaymentData}
          buttonType={buttonType}
          handleModalClick={setOpenModal}
        />
      )}
    </div>
  );
};

export default UserPage;
