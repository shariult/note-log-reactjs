import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  isNotebookOpen: true,
  showLoader: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    modalToggleFn: function (prevState, action) {
      prevState.isModalOpen = !prevState.isModalOpen;
    },
    toggleNotebookState: function (prevState, action) {
      if (action.payload === "open") {
        prevState.isNotebookOpen = true;
      } else if (action.payload === "close") {
        prevState.isNotebookOpen = false;
      } else {
        prevState.isNotebookOpen = !prevState.isNotebookOpen;
      }
    },
    loaderToggleFn: function (prevState, action) {
      prevState.showLoader = action.payload;
    },
  },
});
const uiActions = uiSlice.actions;

export { uiActions };
export default uiSlice;
