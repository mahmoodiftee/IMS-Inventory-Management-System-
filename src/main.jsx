import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root/Root";
import Homepage from "./Pages/HomePage/Homepage";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Register/Register";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import ErrorPage from "../ErrorPage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import DashboardRoot from "./Pages/DashboardRoot/DashboardRoot";
import DashBoard from "./Pages/DashboardRoot/Dashboard/DashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },

  //Dashboard
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardRoot></DashboardRoot></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <DashBoard></DashBoard>
      },
    ]
  }




]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
