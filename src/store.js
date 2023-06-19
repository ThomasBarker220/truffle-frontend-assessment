import { configureStore } from "@reduxjs/toolkit";
import billboardReducer from "./features/billboard/billboardSlice";

export const store = configureStore({
  reducer: {
    billboard: billboardReducer,
  },
});
