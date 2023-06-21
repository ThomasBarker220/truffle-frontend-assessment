import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetBillForm,
  toggleReviewMode,
  updateBillData,
  updateImage,
  updateImageName,
} from "../features/newBill/newBillSlice";
import { Link, useNavigate } from "react-router-dom";
import { addBill } from "../features/billboard/billboardSlice";
import { FaAngleLeft } from "react-icons/fa";

// const handleSubmit = (e) => {
//   e.preventDefault();

//   const formData = new FormData(e.currentTarget);
//   // get all entries
//   const newBillData = Object.fromEntries(formData);
//   // do something (post request, add to list, etc)
//   newBillData.id = nanoid();
//   console.log(newBillData);
//   // reset values
//   e.currentTarget.reset();
// };

const BillForm = () => {
  const dispatch = useDispatch();
  const newBill = useSelector((state) => state.newBill);
  const {
    name,
    address,
    hospital,
    date,
    amount,
    image,
    imageName,
    isReviewing,
  } = newBill;
  const navigate = useNavigate();

  const handleReview = (e) => {
    e.preventDefault();
    dispatch(toggleReviewMode());
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateBillData({ name, value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    dispatch(updateImageName(file.name));
    const fileUrl = URL.createObjectURL(file);
    dispatch(updateImage(fileUrl));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBill(newBill));
    dispatch(resetBillForm());
    navigate("/");
  };

  if (isReviewing) {
    return (
      <div>
        <section className="bill">
          <h4>{name}</h4>
          <p>
            <span className="bill-label">Patient address: </span> {address}
          </p>
          <p>
            <span className="bill-label">Hospital: </span> {hospital}
          </p>
          <p>
            <span className="bill-label">Date: </span>
            {date}
          </p>
          <p>
            <span className="bill-label">Bill amount: </span> ${amount}
          </p>
          <img src={image} alt="medical bill" />
          <button className="btn edit-btn" onClick={handleReview}>
            Edit Bill
          </button>
          <button onClick={handleSubmit} className="btn submit-btn">
            Submit
          </button>
        </section>
      </div>
    );
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleReview}>
        <Link to={"/"} className="btn home-btn">
          <FaAngleLeft />
          Back to home page
        </Link>
        <h4>Upload New Medical Bill</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Patient Name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        {/* address */}
        <div className="form-row">
          <label htmlFor="address" className="form-label">
            Patient Address
          </label>
          <input
            type="text"
            className="form-input"
            id="address"
            name="address"
            value={address}
            onChange={handleInputChange}
          />
        </div>
        {/* hospital */}

        <div className="form-row">
          <label htmlFor="hospital" className="form-label">
            Hospital
          </label>
          <input
            type="text"
            className="form-input"
            id="hospital"
            name="hospital"
            value={hospital}
            onChange={handleInputChange}
          />
        </div>

        {/* Date */}
        <div className="form-row">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="text"
            className="form-input"
            id="date"
            name="date"
            value={date}
            onChange={handleInputChange}
          />
        </div>

        {/* Amount */}
        <div className="form-row">
          <label htmlFor="amount" className="form-label">
            Bill Amount
          </label>
          <input
            type="number"
            className="form-input"
            id="amount"
            name="amount"
            value={amount}
            onChange={handleInputChange}
          />
        </div>

        {/* Bill Image */}
        <div className="form-row">
          <label htmlFor="image" className="form-label">
            Bill Image
          </label>
          <input
            type="file"
            className="form-input"
            id="image"
            name="image"
            title=""
            onChange={handleImageChange}
          />
          <span>{imageName || "No file chosen"}</span>
        </div>

        <button type="submit" className="btn btn-block">
          Review
        </button>
      </form>
    </div>
  );
};

export default BillForm;
