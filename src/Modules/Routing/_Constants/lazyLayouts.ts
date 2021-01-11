import { lazy } from "react";

export const lazyLayouts = {
  Site: lazy(() => import("Layouts/Site/SiteLayout")),
};
