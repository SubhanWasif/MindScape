import React from "react";

import "./index.css";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./util/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
