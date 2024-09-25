import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";

const store = configureStore({
  reducer: {
    uiState: uiSlice.reducer,
  },
});

export default store;
