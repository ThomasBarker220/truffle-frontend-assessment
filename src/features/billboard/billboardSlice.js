import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  bills: [
    {
      id: nanoid(),
      name: "Brent Steveson",
      address: "123 Boulevard Lane",
      hospital: "L'Hopital",
      date: "April 1, 2025",
      amount: 0,
      image:
        "https://opendocs.com/wp-content/uploads/2019/10/Medical-Invoice-Sample.png",
    },
    {
      id: nanoid(),
      name: "Brent Steveson",
      address: "123 Boulevard Lane",
      hospital: "L'Hopital",
      date: "April 1, 2025",
      amount: 0,
      image:
        "https://opendocs.com/wp-content/uploads/2019/10/Medical-Invoice-Sample.png",
    },
  ],
  currentBill: null,
};

const billboardSlice = createSlice({
  name: "billboard",
  initialState,
  reducers: {
    removeBill: (state, action) => {
      const billId = action.payload;
      state.bills = state.bills.filter((bill) => bill.id !== billId);
    },
    addBill: (state, action) => {
      const newBill = action.payload;
      state.bills = [...state.bills, newBill];
    },
    changeCurrentBill: (state, action) => {
      const currentBillId = action.payload;
      state.currentBill = currentBillId;
    },
  },
});

// console.log(billboardSlice);

export const { removeBill, addBill, changeCurrentBill } =
  billboardSlice.actions;

export default billboardSlice.reducer;
