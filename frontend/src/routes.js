import React, { lazy } from "react";
import { useRoutes, Navigate, Outlet } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PaymentIcon from "@mui/icons-material/Payment";
import Result from "./pages/Result";
const DefaultLayout = lazy(() => import("./layouts/DefaultLayout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Auth = lazy(() => import("./pages/Auth"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Payment = lazy(() => import("./pages/Payment"));
const PaymentForm = lazy(() => import("./pages/PaymentForm"));
const Registration = lazy(() => import("./pages/Registration"));

export const dashboardRoutes = [
	{
		path: "",
		pathname: "",
		name: "Dashboard",
		element: <Dashboard />,
		icon: <DashboardIcon />,
	},
	{
		path: "payment",
		pathname: "/payment",
		name: "Payment",
		element: <Payment />,
		icon: <PaymentIcon />,
	},
	{
		path: "results",
		pathname: "/results",
		name: "Results",
		element: <Result />,
		icon: <DashboardIcon />,
	},
	// { path: "/dashboard", name: "Dashboard", element: Dashboard, icon: DashboardIcon },
];

const isAdmin = localStorage.getItem("isAdmin") ? JSON.parse(localStorage.getItem("isAdmin")) : false
if (isAdmin) {
  dashboardRoutes.push({
    path: "admin",
    pathname: "/admin",
    name: "Admin",
    element: <Dashboard />,
    icon: <AdminPanelSettingsIcon />,
  });
}
const Routes = () => {
	return useRoutes([
		{
			path: "/dashboard",
			element: <DefaultLayout />,
			children: dashboardRoutes,
		},
		{
			path: "/",
			element: <Outlet />,
			children: [
				{ path: "/", element: <Navigate to="/dashboard" replace /> },
				{ path: "/login", element: <Auth /> },
				{ path: "/registration", element: <Registration /> },
				{ path: "/pay-now", element: <PaymentForm /> },
				{ path: "404", element: <NotFound /> },
				{ path: "*", element: <Navigate to="/404" replace /> },
			],
		},
		{ path: "*", element: <Navigate to="/404" replace /> },
	]);
};

export default Routes;
