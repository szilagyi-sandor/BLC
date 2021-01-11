import { createRoutes } from "../ReactAutoRouting/_Helpers/RouteHandlers/createRoutes";
import { processRoutes } from "../ReactAutoRouting/_Helpers/RouteHandlers/processRoutes";
import { lazyLayouts } from "./lazyLayouts";
import { lazyPages } from "./lazyPages";

export const unprocessedRoutes = createRoutes({
  site: {
    Component: lazyLayouts.Site,
    documentTitle: "BLC - ",
    paths: [""],
    children: {
      home: {
        Component: lazyPages.Home,
        documentTitle: "Home",
        paths: ["/"],
      },

      notFound: {
        Component: lazyPages.Home,
        documentTitle: "Not found",
        paths: ["*"],
      },
    },
  },
});

export const routes = processRoutes(unprocessedRoutes);
