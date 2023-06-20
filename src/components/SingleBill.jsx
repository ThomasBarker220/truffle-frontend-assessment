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
      <p>{address}</p>
      <p>{hospital}</p>
      <p>{date}</p>
      <p>${amount}</p>
      <img src={image} alt="medical bill" />
    </section>
  );
};

export default SingleBill;
