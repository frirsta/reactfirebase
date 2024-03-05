import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Page } from "./components/Pages/Page";
import Register from "./components/Pages/Auth/Register";
import Login from "./components/Pages/Auth/Login";
import Reset from "./components/Pages/Auth/Reset";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Page></Page>,
    errorElement: <div>Not found</div>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/reset",
    element: <Reset></Reset>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
