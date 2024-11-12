import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import notebookSlice from "./notebookSlice";

const store = configureStore({
  reducer: {
    uiState: uiSlice.reducer,
    notebookState: notebookSlice.reducer,
  },
});

export default store;
