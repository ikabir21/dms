<<<<<<< HEAD
import React, { lazy } from "react";
import { useRoutes, Navigate, Outlet } from "react-router-dom";
const DefaultLayout = lazy(() => import("./layouts/DefaultLayout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Auth = lazy(() => import("./pages/Auth"));
const NotFound = lazy(() => import("./pages/NotFound"));
import DashboardIcon from "@mui/icons-material/Dashboard";

export const dashboardRoutes = [
  { path: "", pathname: "", name: "Dashboard", element: <Dashboard />, icon: <DashboardIcon /> },
  {
    path: "home",
    pathname: "/home",
    name: "Dashboard",
    element: <Dashboard />,
    icon: <DashboardIcon />
  },
  {
    path: "profile",
    pathname: "/profile",
    name: "Profile",
    element: <Dashboard />,
    icon: <DashboardIcon />
  }
  // { path: "/dashboard", name: "Dashboard", element: Dashboard, icon: DashboardIcon },
];

const Routes = () =>
  useRoutes([
    {
      path: "/dashboard",
      element: <DefaultLayout />,
      children: dashboardRoutes
    },
    {
      path: "/",
      element: <Outlet />,
      children: [
        { path: "/", element: <Navigate to="/dashboard" replace /> },
        { path: "auth", element: <Auth /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> }
      ]
    },
    { path: "*", element: <Navigate to="/404" replace /> }
  ]);

export default Routes;
=======
import React, { lazy } from "react";
import { useRoutes, Navigate, Outlet } from "react-router-dom";
const DefaultLayout = lazy(() => import("./layouts/DefaultLayout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Auth = lazy(() => import("./pages/Auth"));
const NotFound = lazy(() => import("./pages/NotFound"));
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaymentIcon from "@mui/icons-material/Payment";
import Payment from "./pages/Payment";
import Result from "./pages/Result";

export const dashboardRoutes = [
  { path: "", pathname: "", name: "Dashboard", element: <Dashboard />, icon: <DashboardIcon /> },
  {
    path: "home",
    pathname: "/home",
    name: "Payment",
    element: <Payment />,
    icon: <PaymentIcon />
  },
  {
    path: "Results",
    pathname: "/profile",
    name: "Results",
    element: <Result />,
    icon: <DashboardIcon />
  }
  // { path: "/dashboard", name: "Dashboard", element: Dashboard, icon: DashboardIcon },
];

const Routes = () =>
  useRoutes([
    {
      path: "/dashboard",
      element: <DefaultLayout />,
      children: dashboardRoutes
    },
    {
      path: "/",
      element: <Outlet />,
      children: [
        { path: "/", element: <Navigate to="/dashboard" replace /> },
        { path: "auth", element: <Auth /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" replace /> }
      ]
    },
    { path: "*", element: <Navigate to="/404" replace /> }
  ]);

export default Routes;
>>>>>>> ddc81ab5ac7530112a19f60f83cb14b14c413ee6
