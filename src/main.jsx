import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SnackbarProvider } from "notistack";

import "./app.css";

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
