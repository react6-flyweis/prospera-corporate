import { lazy } from "react";
import { Navigate, Route, Routes, type RouteObject } from "react-router";

import { PeopleDetailsLayout } from "@/components/people/PeopleDetailsLayout";

const JobPage = lazy(() => import("@/page/People/tabs/Job"));
const PayPage = lazy(() => import("@/page/People/tabs/Pay"));
const TaxesPage = lazy(() => import("@/page/People/tabs/Taxes"));

const PlaceHolder = () => <div>Coming soon</div>;
const Personal = lazy(() => import("@/page/People/tabs/Personal"));
const TimeOff = lazy(() => import("@/page/People/tabs/TimeOff"));
const AppsPage = lazy(() => import("@/page/People/tabs/Apps"));

const peopleDetailsRoutes: RouteObject[] = [
  { index: true, element: <Navigate to="job" /> },
  { path: "job", element: <JobPage /> },
  { path: "pay", element: <PayPage /> },
  { path: "taxes", element: <TaxesPage /> },
  { path: "personal", element: <Personal /> },
  { path: "performance", element: <PlaceHolder /> },
  { path: "time-off", element: <TimeOff /> },
  { path: "apps", element: <AppsPage /> },
  { path: "documents", element: <PlaceHolder /> },
  { path: "benefits", element: <PlaceHolder /> },
  { path: "notes", element: <PlaceHolder /> },
];

export default function PeopleDetails() {
  return (
    <Routes>
      <Route element={<PeopleDetailsLayout />}>
        {peopleDetailsRoutes.map((route, idx) =>
          route.index ? (
            <Route key={`index-${idx}`} index element={route.element} />
          ) : (
            <Route
              key={String(route.path)}
              path={route.path}
              element={route.element}
            />
          )
        )}
      </Route>
    </Routes>
  );
}
