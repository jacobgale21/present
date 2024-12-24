import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SignUp from "./pages/signup";
import Home from "./pages/home";
import Login from "./pages/login";
import Create from "./pages/create";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create",
    element: <Create />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
