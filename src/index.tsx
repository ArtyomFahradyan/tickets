import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

const Main = lazy(() => import("./main"));

const App = Main;

/**
 * Our fallback ui when browser is not
 */
ReactDOM.render(
  <Suspense fallback={<></>}>
    <App />
  </Suspense>,
  document.getElementById("root")
);

export {};
