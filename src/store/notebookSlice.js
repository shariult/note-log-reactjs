import { createSlice } from "@reduxjs/toolkit";
import sendRequest from "../utils/sendRequest";
import { uiActions } from "./uiSlice";

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
    update: function (prevState, action) {
      const itemIdx = prevState.findIndex(
        (item) => item._id === action.payload._id
      );

      prevState[itemIdx].title = action.payload.title;
      prevState[itemIdx].notebookPrivacyLevel =
        action.payload.notebookPrivacyLevel;
    },
    delete: function (prevState, action) {
      return action.payload;
    },
  },
});

const notebookActions = notebookSlice.actions;

function notebookListAction() {
  return async function (dispatch) {
    dispatch(uiActions.loaderToggleFn(true));

    try {
      const reqConfig = {
        url: "/notebook",
        method: "GET",
      };

      const data = await sendRequest(reqConfig);
      dispatch(notebookActions.list(data));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(uiActions.loaderToggleFn(false));
    }
  };
}

function notebookCreateAction(formData) {
  return async function (dispatch) {
    dispatch(uiActions.loaderToggleFn(true));

    try {
      const reqConfig = {
        url: "/notebook",
        method: "POST",
        body: formData,
      };
      const data = await sendRequest(reqConfig);
      dispatch(notebookActions.create(data));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(uiActions.loaderToggleFn(false));
    }
  };
}

function notebookUpdateAction(formData) {
  return async function (dispatch) {
    dispatch(uiActions.loaderToggleFn(true));

    try {
      const reqConfig = {
        url: `/notebook/${formData._id}`,
        method: "PUT",
        body: formData,
      };

      const data = await sendRequest(reqConfig);
      dispatch(notebookActions.update(data));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(uiActions.loaderToggleFn(false));
    }
  };
}

function notebookDeleteAction(formData) {
  return async function (dispatch) {
    dispatch(uiActions.loaderToggleFn(true));

    try {
      const reqConfig = {
        url: `/notebook/${formData._id}`,
        method: "DELETE",
      };

      const data = await sendRequest(reqConfig);
      dispatch(notebookActions.delete(data));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(uiActions.loaderToggleFn(false));
    }
  };
}

export {
  notebookActions,
  notebookListAction,
  notebookCreateAction,
  notebookUpdateAction,
  notebookDeleteAction,
};
export default notebookSlice;
