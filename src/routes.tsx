import { lazy } from "react";
import type { RouteObject } from "react-router";

import NotFoundPage from "./page/Notfound";

const HomePage = lazy(() => import("./page/Home/Home"));
const PeoplesPage = lazy(() => import("./page/People/People"));
const AddTeamMemberPage = lazy(() => import("./page/People/AddTeamMember"));
const CreateFixedContractPage = lazy(
  () => import("./page/People/CreateFixedContract")
);
const PeopleDetails = lazy(() => import("./page/People/PeopleDetails"));

export const authRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <>Login</>,
  },
  {
    path: "/register",
    element: <>Register</>,
  },
  // {
  //   path: '/forgot-password',
  //   element: <ForgotPasswordPage />,
  // },
  // {
  //   path: '/reset-password/:token',
  //   element: <ResetPasswordPage />,
  // },
];

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/people",
    element: <PeoplesPage />,
  },
  {
    path: "/people/:id*",
    element: <PeopleDetails />,
  },
  {
    path: "/people/add",
    element: <AddTeamMemberPage />,
  },
  {
    path: "/people/add/fixed",
    element: <CreateFixedContractPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
