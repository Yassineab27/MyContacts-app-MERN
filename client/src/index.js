import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./components/App";
import reducer from "./reducers";
import setAuthorizationToken from "./utils/setAuthorizationToken";
import { setUser } from "./actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

if (localStorage.token && localStorage.user) {
  setAuthorizationToken(localStorage.getItem("token"));
  store.dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
