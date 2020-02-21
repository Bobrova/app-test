import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';
import App from 'components/App';
import MainContainer from 'containers/MainContainer';
import CreateTestContainer from 'containers/CreateTestContainer';
import PassingTheTest from 'components/PassingTheTest';
import store from './store/configureStore';

render(
  <HashRouter>
    <Provider store={store}>
      <Switch>
        <Route
          path="/"
          component={App}
          exact
        />
        <Route
          path="/main"
          component={MainContainer}
          exact
        />
        <Route
          path="/main/create-test"
          component={CreateTestContainer}
          exact
        />
        <Route
          path="/main/test"
          component={PassingTheTest}
          exact
        />
      </Switch>
    </Provider>
  </HashRouter>,
  document.getElementById('root'),
);
