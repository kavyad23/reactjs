import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept(App);
}
