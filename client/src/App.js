import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'

import AppContainer from './components/DesignComponents/AppStyles'

import Login from './components/Login/Login'

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Route path="/login" component={Login} />
      </AppContainer>
    );
  }
}

const AppWithRouter = withRouter(App)

export default AppWithRouter;
