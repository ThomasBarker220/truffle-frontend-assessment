import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  id: nanoid(),
  name: "",
  address: "",
  hospital: "",
  date: "",
  amount: 0,
  image: "",
  isReviewing: false,
};

const newBillSlice = createSlice({
  name: "newBill",
  initialState,
  reducers: {
    updateBillData: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    toggleReviewMode: (state) => {
      state.isReviewing = !state.isReviewing;
    },
    resetBillForm: (state) => {
      state.id = null;
      state.name = "";
      state.address = "";
      state.hospital = "";
      state.date = "";
      state.amount = "";
      state.image = "";
      state.isReviewing = false;
    },
  },
});

export const { updateBillData, toggleReviewMode, resetBillForm } =
  newBillSlice.actions;

export default newBillSlice.reducer;
