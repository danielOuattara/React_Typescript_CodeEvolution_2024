import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import AppFunction from "./_01_functional/AppFunctional";
import AppClass from "./_02_class/AppClass";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <AppFunction />
    <hr />

    <AppClass />
  </React.StrictMode>,
);
