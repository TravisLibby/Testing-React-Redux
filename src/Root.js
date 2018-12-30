import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from 'reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = (initialState) => {
    return createStore(
      reducer,
      initialState,
      composeEnhancers(applyMiddleware(thunk))
    )
};

export default ({ children, initialState = {} }) => {
  return (
    <Provider store={store(initialState)}>
      {children}
    </Provider>
  );
};