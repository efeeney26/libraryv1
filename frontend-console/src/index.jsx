import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore, applyMiddleware, compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';

import reducer from './data/reducers';
import rootSaga from './data/sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  sagaMiddleware,
];
const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-underscore-dangle
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
        // eslint-disable-next-line no-underscore-dangle
        && window.__REDUX_DEVTOOLS_EXTENSION__({
          name: 'Library-Saga',
          realtime: true,
          trace: true,
          traceLimit: 34,
        });

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension);
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(
  reducer,
  composedEnhancers,
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
