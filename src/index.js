import React from 'react';
import ReactDOM from 'react-dom';

import Raven from 'raven-js';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import reducers from './reducers';
import App from './App';

const history = createHistory();
const routerMiddle = routerMiddleware(history);

const store = createStore(reducers, composeWithDevTools(applyMiddleware(routerMiddle)));

Raven.config('https://87e2f3744e4349c89429e0a2c6b3c9bd@sentry.io/252057').install();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
