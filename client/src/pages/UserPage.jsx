import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { paymentData } from "../data";
import TransactionCard from "../components/TransactionCard";

const UserPage = () => {
  const [totalAmountPending, setTotalAmountPending] = useState(0);
  const calculateTotalAmountPending = () => {
    console.log(paymentData.totalAmountPending);
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
    return totalOutboundAmount - totalInboundAmount;
  };
  useEffect(() => {
    const amount = calculateTotalAmountPending();
    console.log(amount);
    setTotalAmountPending(amount);
  }, []);
  return (
    <div>
      <Navbar />
      {totalAmountPending > 0 ? (
        <div className="left-0 right-0 bg-indigo-500 text-white rounded-md m-2 flex justify-between p-4 items-center">
          <div>You will get</div>
          <div>{totalAmountPending}</div>
        </div>
      ) : (
        <div className="left-0 right-0 bg-indigo-500 text-white rounded-md m-2 flex justify-between p-4 items-center">
          <div>You will give</div>
          <div>{-1 * totalAmountPending}</div>
        </div>
      )}

      <div className=" m-2 scroll-y">
        {paymentData.map((paymentData, i) => {
          return <TransactionCard paymentData={paymentData} />;
        })}
      </div>

      <div className="fixed shadow-inner py-3 bg-white bottom-0 left-0 gap-2 text-white flex justify-between p-2 items-center right-0">
        <button className="bg-green-600 p-2 text-bold rounded-md w-1/2">
          You Get
        </button>
        <button className="bg-red-500 p-2 text-bold rounded-md w-1/2 ">
          You Give
        </button>
      </div>
    </div>
  );
};

export default UserPage;
