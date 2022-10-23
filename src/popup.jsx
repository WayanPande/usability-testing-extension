import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Store } from "webext-redux";
import AppPopup from "./appPopup.jsx";

const store = new Store({
  portName: "RSC",
});

const root = ReactDOM.createRoot(document.getElementById("react-target"));

root.render(
  <Provider store={store}>
    <AppPopup />
  </Provider>
);
