import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  bills: [],
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
