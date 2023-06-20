import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { removeBill } from "../features/billboard/billboardSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const { currentBill } = useSelector((state) => state.billboard);

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove this bill?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispatch(removeBill(currentBill));
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => dispatch(closeModal())}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
