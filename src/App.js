import './App.css';
import React from 'react';
import { Routes } from './routes/router';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootSaga from './container/sagas';
import HeaderComponent from './pages/Header/HeaderComponent'
import mainReducer from './mainReducer';
import composeWithDevTools from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  mainReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

sagaMiddleware.run(rootSaga);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HeaderComponent></HeaderComponent>
        <Routes />
      </Provider>
    );
  }
};
