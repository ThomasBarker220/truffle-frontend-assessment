import React from "react";
import { Link } from "react-router-dom";
import BillBoard from "../components/BillBoard";

const Home = () => {
  return (
    <>
      <section className="home-container">
        <h3>Medical Bills</h3>
        <Link to={"/bill-form"} className="btn bill-btn">
          Add new bill
        </Link>
      </section>
      <BillBoard />
    </>
  );
};

export default Home;
