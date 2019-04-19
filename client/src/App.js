import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'

import AppContainer from './components/DesignComponents/AppStyles'


class App extends Component {
  render() {
    return (
      <AppContainer>

      </AppContainer>
    );
  }
}

const AppWithRouter = withRouter(App)

export default AppWithRouter;
