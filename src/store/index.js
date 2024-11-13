import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import notebookSlice from "./notebookSlice";
import noteSlice from "./noteSlice";

const store = configureStore({
  reducer: {
    uiState: uiSlice.reducer,
    notebookState: notebookSlice.reducer,
    noteState: noteSlice.reducer,
  },
});

export default store;
