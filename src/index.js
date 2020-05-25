import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

import Routes from './routes';
import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

let composeEnhancers = compose;
if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const Navigation = createAppContainer(Routes);

const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(
  reducers,
  composeEnhancers(enhancer),
);

sagaMiddleware.run(rootSaga);

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;
