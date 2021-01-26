import React from "react";

import "./App.scss";

import ErrorBoundary from "./Modules/Layout/BLC/Components/ErrorBoundary/ErrorBoundary";
import RouteMapper from "./Modules/Routing/ReactAutoRouting/RouteMapper/RouteMapper";
import { routes } from "./Modules/Routing/_Constants/routes";
import SimpleLoader from "Modules/Layout/Components/SimpleLoader/SimpleLoader";
import ErrorPage from "Pages/Error/ErrorPage";

function App() {
  return (
    <div id="App">
      <ErrorBoundary renderForError={<ErrorPage />}>
        <RouteMapper routeObj={routes} suspenseFallback={<SimpleLoader />} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
