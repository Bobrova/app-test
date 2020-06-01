import React, { Component } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import AuthorizationContainer from 'containers/AuthorizationContainer';
import MainContainer from 'containers/MainContainer';
import CreateTestContainer from 'containers/CreateTestContainer';
import TakingTestContainer from 'containers/TakingTestContainer';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/"
          component={AuthorizationContainer}
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
    );
  }
}

export default App;
