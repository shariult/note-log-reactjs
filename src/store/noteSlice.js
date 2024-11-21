import { createSlice } from "@reduxjs/toolkit";
import sendRequest from "../utils/sendRequest";
import { uiActions } from "./uiSlice";

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
    update: function (prevState, action) {
      const itemIdx = prevState.findIndex(
        (item) => item._id === action.payload._id
      );

      prevState[itemIdx].noteTitle = action.payload.noteTitle;
      prevState[itemIdx].noteContent = action.payload.noteContent;
      prevState[itemIdx].noteTags = action.payload.noteTags;
      prevState[itemIdx].noteStartDate = action.payload.noteStartDate;
      prevState[itemIdx].noteEndDate = action.payload.noteEndDate;
      prevState[itemIdx].notePrivacyLevel = action.payload.notePrivacyLevel;
    },
    delete: function (prevState, action) {
      return action.payload;
    },
  },
});

const noteActions = noteSlice.actions;

function noteListAction(notebookId) {
  return async function (dispatch) {
    dispatch(uiActions.loaderToggleFn(true));

    try {
      const reqConfig = {
        url: `/notebook/${notebookId}/notes`,
        method: "GET",
      };
      const data = await sendRequest(reqConfig);
      dispatch(noteActions.list(data));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(uiActions.loaderToggleFn(false));
    }
  };
}

function noteCreateAction(formData) {
  return async function (dispatch) {
    dispatch(uiActions.loaderToggleFn(true));

    try {
      const reqConfig = {
        url: `/notebook/${formData.notebookId}/notes`,
        method: "POST",
        body: formData,
      };
      const data = await sendRequest(reqConfig);
      dispatch(noteActions.create(data));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(uiActions.loaderToggleFn(false));
    }
  };
}

function noteUpdateAction(formData) {
  return async function (dispatch) {
    dispatch(uiActions.loaderToggleFn(true));

    try {
      const reqConfig = {
        url: `/notebook/${formData.nbId}/notes/${formData.nId}`,
        method: "PUT",
        body: formData,
      };
      const data = await sendRequest(reqConfig);
      dispatch(noteActions.update(data));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(uiActions.loaderToggleFn(false));
    }
  };
}

function noteDeleteAction(formData) {
  return async function (dispatch) {
    dispatch(uiActions.loaderToggleFn(true));

    try {
      const reqConfig = {
        url: `/notebook/${formData.nbId}/notes/${formData.nId}`,
        method: "DELETE",
      };
      const data = await sendRequest(reqConfig);
      dispatch(noteActions.delete(data));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(uiActions.loaderToggleFn(false));
    }
  };
}

export {
  noteActions,
  noteCreateAction,
  noteListAction,
  noteUpdateAction,
  noteDeleteAction,
};
export default noteSlice;
