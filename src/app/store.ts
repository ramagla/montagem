import { configureStore } from "@reduxjs/toolkit";
import leadReducer from "../features/leads/leadSlice";

export const store = configureStore({
  reducer: {
    leads: leadReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
