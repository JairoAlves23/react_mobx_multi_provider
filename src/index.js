import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "mobx-react";

import store from "../src/store";
import rootStore from "../src/store/RootStore";
import authStore from "../src/store/AuthStore";

const stores = {
  store,
  rootStore,
  authStore,
}

ReactDOM.render(
  <Provider store={stores}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
