import { lazy } from "react";

export const lazyPages = {
  Home: lazy(() => import("Pages/Home/HomePage")),
  DefaultElements: lazy(
    () => import("Pages/DefaultElements/DefaultElementsPage")
  ),
  NotFound: lazy(() => import("Pages/NotFound/NotFoundPage")),
};
