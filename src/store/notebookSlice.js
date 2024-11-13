import { createSlice } from "@reduxjs/toolkit";
import sendRequest from "../utils/sendRequest";

const initialState = [];

const notebookSlice = createSlice({
  name: "notebookSlice",
  initialState,
  reducers: {
    list: function (prevState, action) {
      return action.payload;
    },
    create: function (prevState, action) {
      prevState.push(action.payload);
    },
  },
});

const notebookActions = notebookSlice.actions;

function createNotebookAction(formData) {
  return async function (dispatch) {
    const reqConfig = {
      url: "/notebook",
      method: "POST",
      body: formData,
    };
    const data = await sendRequest(reqConfig);
    dispatch(notebookActions.create(data));
  };
}

function listNotebookAction() {
  return async function (dispatch) {
    const reqConfig = {
      url: "/notebook",
      method: "GET",
    };

    const data = await sendRequest(reqConfig);
    dispatch(notebookActions.list(data));
  };
}

export { notebookActions, createNotebookAction, listNotebookAction };
export default notebookSlice;
