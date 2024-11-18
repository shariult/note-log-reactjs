import React, { useEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../store/uiSlice";

import Button from "../components/ui/Button";
import Navbar from "../components/layout/Navbar";
import NotebookAside from "../components/Notebook/NotebookAside";

import { PiNotebook } from "react-icons/pi";
import styles from "./NotebookLayout.module.scss";

function NotebookLayout() {
  const uiState = useSelector((state) => state.uiState);
  const { nbId, nId } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();

  const routesToOpen = [`/notebook/${nbId}/note`];
  const routesToClose = [
    "/notebook/create",
    `/notebook/${nbId}/edit`,
    `/notebook/${nbId}/note/create`,
    `/notebook/${nbId}/note/${nId}`,
  ];

  function notebookToggleHandler() {
    dispatch(uiActions.toggleNotebookState());
  }

  useEffect(
    function () {
      if (routesToClose.includes(location.pathname)) {
        dispatch(uiActions.toggleNotebookState("close"));
      }

      if (routesToOpen.includes(location.pathname)) {
        dispatch(uiActions.toggleNotebookState("open"));
      }
    },
    [dispatch, location.pathname]
  );

  return (
    <>
      <Navbar />
      <div className={`container ${styles["main"]}`}>
        {uiState.isNotebookOpen && <NotebookAside />}
        <Button
          className={styles["notebook-toggle"]}
          onClick={notebookToggleHandler}
        >
          <PiNotebook />
        </Button>
        <Outlet />
      </div>
    </>
  );
}

export default NotebookLayout;
