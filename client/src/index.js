import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SignUp from "./pages/signup";
import Home from "./pages/home";
import Login from "./pages/login";
import Create from "./pages/create";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Message from "./pages/message";
import Follow from "./pages/follow";
import Profile from "./pages/profile";
import Libraries from "./pages/library";
import CreateLib from "./pages/createLib";

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
    path: "/create/:id",
    element: <Create />,
  },
  {
    path: "/message",
    element: <Message />,
  },
  {
    path: "/follow",
    element: <Follow />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/libraries/:id",
    element: <Libraries />,
  },
  {
    path: "/library",
    element: <CreateLib />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
