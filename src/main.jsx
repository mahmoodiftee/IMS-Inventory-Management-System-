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
import CreateStore from "./Pages/CreateStore/CreateStore";
import ProductManagement from "./Pages/DashboardRoot/Dashboard/Product Management/ProductManagement";
import AddProduct from "./Pages/DashboardRoot/DashboardElements/AddProduct/AddProduct";
import Subscription from "./Pages/DashboardRoot/Dashboard/Subscription/Subscription";
import SaleCollection from "./Pages/DashboardRoot/Dashboard/SaleCollection/SaleCollection";
import Update from "./Pages/DashboardRoot/Dashboard/Update/Update";
import Cart from "./Pages/DashboardRoot/Dashboard/Cart/Cart";
import PDF from "./Pages/DashboardRoot/Dashboard/Cart/PDF/PDF";
import Payment from "./Components/Payment/Payment";
import SaleSummary from "./Pages/DashboardRoot/Dashboard/SaleSummary/SaleSummary";
import ManageShops from "./Pages/DashboardRoot/AdminDashboard/ManageShops/ManageShops";
import AdminSaleSummary from "./Pages/DashboardRoot/AdminDashboard/AdminSaleSummary/AdminSaleSummary";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
      {
        path: "/createStore",
        element: <PrivateRoute><CreateStore></CreateStore></PrivateRoute>,
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
        element: <DashBoard></DashBoard>,
      },
      {
        path: '/dashboard/product-management',
        element: <PrivateRoute> <ProductManagement></ProductManagement></PrivateRoute>,
      },
      {
        path: '/dashboard/add-product',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: '/dashboard/subscription',
        element: <PrivateRoute><Subscription></Subscription></PrivateRoute>,
      },
      {
        path: '/dashboard/sale-collection',
        element: <PrivateRoute> <SaleCollection></SaleCollection></PrivateRoute>,
      },
      {
        path: '/dashboard/cart',
        element: <PrivateRoute> <Cart></Cart></PrivateRoute>,
      },
      {
        path: '/dashboard/sale-summary',
        element: <PrivateRoute><SaleSummary /></PrivateRoute>,
      },
      {
        path: '/dashboard/pdf',
        element: <PDF />,
      },

      {
        path: "/dashboard/update/:id",
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
        loader: ({ params }) => fetch(`http://localhost:5000/cards/${params.id}`)
      },
      //Admin Routes
      {
        path: '/dashboard/manage-shops',
        element: <ManageShops></ManageShops>,
      },
      {
        path: '/dashboard/admin-sale-summary',
        element: <AdminSaleSummary />,
      },
    ]
  }




]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      </HelmetProvider>
  </React.StrictMode>
);
