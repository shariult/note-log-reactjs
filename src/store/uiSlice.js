import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleModalState: function (prevState, action) {
      prevState.isModalOpen = !prevState.isModalOpen;
    },
  },
});
const uiActions = uiSlice.actions;

export { uiActions };
export default uiSlice;
