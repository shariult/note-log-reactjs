import { createSlice } from "@reduxjs/toolkit";
import sendRequest from "../utils/sendRequest";

const initialState = [];

const noteSlice = createSlice({
  name: "noteSlice",
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

const noteActions = noteSlice.actions;

function listNoteAction(notebookId) {
  return async function (dispatch) {
    const reqConfig = {
      url: `/notebook/${notebookId}/notes`,
      method: "GET",
    };
    const data = await sendRequest(reqConfig);
    dispatch(noteActions.list(data));
  };
}

function createNoteAction(formData) {
  return async function (dispatch) {
    const reqConfig = {
      url: `/notebook/${formData.notebookId}/notes`,
      method: "POST",
      body: formData,
    };
    const data = await sendRequest(reqConfig);
    dispatch(noteActions.create(data));
  };
}

export { noteActions, createNoteAction, listNoteAction };
export default noteSlice;
