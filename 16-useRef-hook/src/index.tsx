import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import AppFunction from "./_01_functional/AppFunction";
import AppClass from "./_02_class/AppClass";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    {/* <AppFunction /> */}
    <hr />
    <AppClass />
  </React.StrictMode>,
);
