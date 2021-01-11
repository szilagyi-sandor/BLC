import { lazy } from "react";

export const lazyPages = {
  Home: lazy(() => import("Pages/Home/HomePage")),
  NotFound: lazy(() => import("Pages/NotFound/NotFoundPage")),
};
