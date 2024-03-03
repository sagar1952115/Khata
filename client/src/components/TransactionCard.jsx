import React from "react";

const TransactionCard = ({ paymentData }) => {
  const { amount, payment, mode, date } = paymentData;
  return (
    <div
      className={`w-full min-h-20  p-2  text-white ${
        payment === "inbound" ? "justify-start" : "justify-end"
      } items-center flex`}
    >
      <div
        className={`flex flex-col w-1/2 p-4 rounded-md  ${
          payment === "inbound" ? "bg-green-500" : "bg-red-500"
        }  h-auto text-`}
      >
        <div className="text-3xl py-2">{amount}</div>
        <div className="flex justify-between text-sm">
          <div>{date}</div>
          {payment === "inbound" && <div className="italic">{mode}</div>}
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
