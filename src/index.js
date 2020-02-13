import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import App from 'components/App';
import Main from 'components/Main';
import CreateTest from 'components/CreateTest';
import PassingTheTest from 'components/PassingTheTest';

render(
  <HashRouter>
    <Switch>
      <Route
        path="/"
        component={App}
        exact
      />
      <Route
        path="/main"
        component={Main}
        exact
      />
      <Route
        path="/main/create-test"
        component={CreateTest}
        exact
      />
      <Route
        path="/main/test"
        component={PassingTheTest}
        exact
      />
    </Switch>
  </HashRouter>,
  document.getElementById('root'),
);
