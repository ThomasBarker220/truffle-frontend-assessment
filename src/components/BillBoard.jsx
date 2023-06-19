import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import SingleBill from "./SingleBill";

const BillBoard = () => {
  const { bills } = useSelector((state) => state.billboard);

  return (
    <section className="billboard-container">
      <div className="billboard">
        {bills.map((bill) => {
          return <SingleBill bill={bill} key={bill.id} />;
        })}
      </div>
    </section>
  );
};

export default BillBoard;
