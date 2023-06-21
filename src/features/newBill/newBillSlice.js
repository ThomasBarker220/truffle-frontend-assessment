import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  id: nanoid(),
  name: "",
  address: "",
  hospital: "",
  date: "",
  amount: 0,
  image: null,
  imageName: "",
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
    updateImage: (state, action) => {
      state.image = action.payload;
    },
    updateImageName: (state, action) => {
      state.imageName = action.payload;
    },
    toggleReviewMode: (state) => {
      state.isReviewing = !state.isReviewing;
    },
    resetBillForm: (state) => {
      state.id = nanoid();
      state.name = "";
      state.address = "";
      state.hospital = "";
      state.date = "";
      state.amount = "";
      state.image = null;
      state.imageName = "";
      state.isReviewing = false;
    },
  },
});

export const {
  updateBillData,
  updateImage,
  updateImageName,
  toggleReviewMode,
  resetBillForm,
} = newBillSlice.actions;

export default newBillSlice.reducer;
