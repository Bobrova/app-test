import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  HashRouter,
} from 'react-router-dom';
import App from 'components/App';
import store from './store/configureStore';

render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root'),
);
