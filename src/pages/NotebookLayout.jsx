import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Homepage from "./Homepage";
import NotebookAside from "../components/Notebook/NotebookAside";

import styles from "./NotebookLayout.module.scss";

function NotebookLayout() {
  return (
    <>
      <Navbar />
      <div className={`container ${styles["main"]}`}>
        <NotebookAside />
        <Outlet />
      </div>
    </>
  );
}

export default NotebookLayout;
