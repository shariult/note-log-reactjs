import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  isNotebookOpen: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleModalState: function (prevState, action) {
      prevState.isModalOpen = !prevState.isModalOpen;
    },
    toggleNotebookState: function (prevState, action) {
      prevState.isNotebookOpen = !prevState.isNotebookOpen;
    },
  },
});
const uiActions = uiSlice.actions;

export { uiActions };
export default uiSlice;
