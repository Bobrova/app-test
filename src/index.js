import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';
import AppContainer from 'containers/AppContainer';
import MainContainer from 'containers/MainContainer';
import CreateTestContainer from 'containers/CreateTestContainer';
import TakingTestContainer from 'containers/TakingTestContainer';
import store from './store/configureStore';

render(
  <HashRouter>
    <Provider store={store}>
      <Switch>
        <Route
          path="/"
          component={AppContainer}
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
          path="/main/test-:id"
          component={TakingTestContainer}
          exact
        />
      </Switch>
    </Provider>
  </HashRouter>,
  document.getElementById('root'),
);
