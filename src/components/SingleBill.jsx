import { useDispatch } from "react-redux";
import { removeBill } from "../features/billboard/billboardSlice";
import { CiSquareRemove } from "react-icons/ci";

const SingleBill = ({ bill }) => {
  const { name, address, hospital, date, amount, image, id } = bill;
  const dispatch = useDispatch();

  return (
    <section className="bill">
      <button className="remove-btn" onClick={() => dispatch(removeBill(id))}>
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
