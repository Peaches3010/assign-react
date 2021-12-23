import React from "react";
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const User = React.lazy(() => import("../pages/User"));
const Login = React.lazy(() => import("../pages/Login"));
const Schedule = React.lazy(() => import("../pages/Schedule"));
const AddDashboard = React.lazy(() =>
  import("../pages/Dashboard/AddTask/index")
);
const routes = [
  {
    path: ["/", "/dashboard"],
    exact: true,
    main: () => <Dashboard />,
  },
  {
    path: "/user",
    exact: true,
    main: () => <User />,
  },
  {
    path: "/login",
    exact: true,
    main: () => <Login />,
  },
  {
    path: "/schedule",
    exact: true,
    main: () => <Schedule />,
  },
  {
    path: "/dashboard/add",
    exact: true,
    main: () => <AddDashboard />,
  },
];

export default routes;
