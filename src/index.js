import React from "react";
import ReactDOM from "react-dom/client";

import "./css/style.css";
import "./css/normalize.css";

import App from "./App";

import { store } from "./Store";

import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
