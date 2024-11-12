import { createSlice } from "@reduxjs/toolkit";

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
    const apiUrl = process.env.REACT_APP_API_URL;
    const token = localStorage.getItem("token");
    const reqConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(formData),
    };

    const res = await fetch(`${apiUrl}/notebook`, reqConfig);

    if (!res.ok) {
      console.log("Something went wrong!");
      return;
    }

    const data = await res.json();
    console.log(data);
    dispatch(notebookActions.create(data));
  };
}

function listNotebookAction(formData) {
  return async function (dispatch) {
    const apiUrl = process.env.REACT_APP_API_URL;
    const token = localStorage.getItem("token");
    const reqConfig = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    const res = await fetch(`${apiUrl}/notebook`, reqConfig);

    if (!res.ok) {
      console.log("Something went wrong!");
      return;
    }

    const data = await res.json();
    dispatch(notebookActions.list(data));
  };
}

export { notebookActions, createNotebookAction, listNotebookAction };
export default notebookSlice;
