import { nanoid } from "nanoid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleReviewMode,
  updateBillData,
} from "../features/newBill/newBillSlice";

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
  const { name, address, hospital, date, amount, image, isReviewing } =
    useSelector((state) => state.newBill);

  const handleReview = (e) => {
    e.preventDefault();
    dispatch(toggleReviewMode());
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateBillData({ name, value }));
  };

  if (isReviewing) {
    return (
      <div>
        <section className="bill">
          <button className="btn" onClick={handleReview}>
            Edit Bill
          </button>
          <h4>{name}</h4>
          <p>{address}</p>
          <p>{hospital}</p>
          <p>{date}</p>
          <p>${amount}</p>
          <img src={image} alt="medical bill" />
        </section>
      </div>
    );
  }

  return (
    <div>
      <form className="form" onSubmit={handleReview}>
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
            type="text"
            className="form-input"
            id="image"
            name="image"
            value={image}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};

export default BillForm;
