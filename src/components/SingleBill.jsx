import { useDispatch } from "react-redux";
import {
  changeCurrentBill,
  removeBill,
} from "../features/billboard/billboardSlice";
import { CiSquareRemove } from "react-icons/ci";
import { openModal } from "../features/modal/modalSlice";

const SingleBill = ({ bill }) => {
  const { name, address, hospital, date, amount, image, id } = bill;
  const dispatch = useDispatch();

  return (
    <section className="bill">
      <button
        className="remove-btn"
        onClick={() => {
          dispatch(changeCurrentBill(id));
          dispatch(openModal());
        }}
      >
        <CiSquareRemove />
        Remove Bill
      </button>
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
    </section>
  );
};

export default SingleBill;
