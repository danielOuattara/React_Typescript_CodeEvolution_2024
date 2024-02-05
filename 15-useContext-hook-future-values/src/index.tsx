import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import AppFunction from "./_01_functional/AppFunctional";

import AppClassContextFutureValuesBlocState from "./_02_01_class_context_future_values_bloc_state/AppClassContextFutureValuesBlocState";
import AppClassContextFutureValuesSpreadState from "./_02_02_class_context_future_values_spread_state/AppClassContextFutureValuesSpreadState";
import AppClassContextAssertionsValuesBlocState from "./_02_03_class_context_assertions_values_bloc_state/AppClassContextAssertionsValuesBlocState";
import AppClassContextAssertionsValuesSpreadState from "./_02_04_class_context_assertions_values_spread_state/AppClassContextAssertionsValuesSpreadState";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <AppFunction />
    <hr />
    <AppClassContextFutureValuesBlocState />
    <hr />
    <AppClassContextFutureValuesSpreadState />
    <hr />
    <AppClassContextAssertionsValuesBlocState />
    <hr />
    <AppClassContextAssertionsValuesSpreadState />
  </React.StrictMode>,
);
