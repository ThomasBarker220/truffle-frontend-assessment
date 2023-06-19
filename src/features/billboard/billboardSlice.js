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
  ],
};

const billboardSlice = createSlice({
  name: "billboard",
  initialState,
});

// console.log(billboardSlice);

export default billboardSlice.reducer;
