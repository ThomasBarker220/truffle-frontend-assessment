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
import { useForm } from "react-hook-form";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleReview = () => {
    if (!image) {
      return;
    }
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

  const submitBill = (e) => {
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
          <button onClick={submitBill} className="btn submit-btn">
            Submit
          </button>
        </section>
      </div>
    );
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(handleReview)}>
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
            {...register("name", { required: "Patient Name is required" })}
            value={name}
            onChange={handleInputChange}
          />
          {errors.name && <div>{errors.name.message}</div>}
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
            {...register("address", {
              required: "Patient address is required",
            })}
            value={address}
            onChange={handleInputChange}
          />
          {errors.address && <div>{errors.address.message}</div>}
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
            {...register("hospital", { required: "Hospital is required" })}
            value={hospital}
            onChange={handleInputChange}
          />
          {errors.hospital && <div>{errors.hospital.message}</div>}
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
            {...register("date", { required: "Date is required" })}
            value={date}
            onChange={handleInputChange}
          />
          {errors.date && <div>{errors.date.message}</div>}
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
            {...register("amount", {
              required: "Amount is required",
              min: {
                value: 0.01,
                message: "Bill amount must be greater than 0",
              },
            })}
            value={amount}
            onChange={handleInputChange}
          />
          {errors.amount && <div>{errors.amount.message}</div>}
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
          <span>
            {imageName || "Please upload an image of your medical bill"}
          </span>
          {}
        </div>

        <button type="submit" className="btn btn-block">
          Review
        </button>
      </form>
    </div>
  );
};

export default BillForm;
