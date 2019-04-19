import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'
import PrivateRoute from './components/SharedComponents/PrivateRoute'

import AppContainer from './components/DesignComponents/AppStyles'
import Login from './components/Login/Login'
import { FriendsList } from './components/FriendsComponents'

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/friends" component={FriendsList} />
      </AppContainer>
    );
  }
}

const AppWithRouter = withRouter(App)

export default AppWithRouter;
