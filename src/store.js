import { configureStore } from "@reduxjs/toolkit";
import billboardReducer from "./features/billboard/billboardSlice";
import newBillReducer from "./features/newBill/newBillSlice";

export const store = configureStore({
  reducer: {
    billboard: billboardReducer,
    newBill: newBillReducer,
  },
});
