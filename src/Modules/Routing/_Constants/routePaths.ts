import { createRoutePathObject } from "../ReactAutoRouting/_Helpers/PathHandlers/createRoutePathObject";
import { routes } from "./routes";

const { site } = routes;
const { home, defaultElements } = site.children;

export const routePaths = createRoutePathObject(routes, {
  home,
  defaultElements,
});
