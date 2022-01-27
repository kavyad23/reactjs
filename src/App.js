import './App.css';
import React from 'react';
import { Routes } from './routes/router';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootSaga from './container/sagas';
import HeaderComponent from './pages/Header/HeaderComponent'
import mainReducer from './mainReducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  mainReducer,
  applyMiddleware(sagaMiddleware),
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
