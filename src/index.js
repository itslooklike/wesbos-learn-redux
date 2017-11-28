import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

import reducers from "./reducers";
import App from "./App";

const history = createHistory();
const routerMiddle = routerMiddleware(history);

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(routerMiddle))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
