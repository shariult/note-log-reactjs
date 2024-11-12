import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthProvider } from "./store/AuthContext";

import RootLayout from "./pages/RootLayout";
import NotebookLayout from "./pages/NotebookLayout";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import NotebookHome from "./components/Notebook/NotebookHome";
import NotebookNew from "./components/Notebook/NotebookNew";
import NotebookShow from "./components/Notebook/NotebookShow";
import NotebookEdit from "./components/Notebook/NotebookEdit";
import NoteNew from "./components/Note/NoteNew";
import NoteShow from "./components/Note/NoteShow";
import NoteEdit from "./components/Note/NoteEdit";

import { isLoggedInLoader, isGuestLoader } from "./utils/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader: isGuestLoader,
      },
      {
        path: "/signUp",
        element: <SignUp />,
        loader: isGuestLoader,
      },
    ],
  },
  {
    path: "/notebook",
    element: <NotebookLayout />,
    errorElement: <ErrorPage />,
    loader: isLoggedInLoader,
    children: [
      {
        index: true,
        element: <NotebookHome />,
      },
      {
        path: "create",
        element: <NotebookNew />,
      },
      {
        path: ":nbId/edit",
        element: <NotebookEdit />,
      },
      {
        path: ":nbId/note",
        children: [
          {
            index: true,
            element: <NotebookShow />,
          },
          {
            path: "create",
            element: <NoteNew />,
          },
          {
            path: ":nId",
            element: <NoteShow />,
          },
          {
            path: ":nId/edit",
            element: <NoteEdit />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
