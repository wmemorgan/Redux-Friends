import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import PrivateRoute from './components/SharedComponents/PrivateRoute'

import { getData } from './actions'

import AppContainer from './components/DesignComponents/AppStyles'
import FriendsList from './components/FriendsComponents/FriendsList'
import Friend from './components/FriendsComponents/Friend'
import Form from './components/SharedComponents/Form'
import Login from './components/Login/Login'

class App extends Component {

  componentDidMount() {
    if (localStorage.getItem('token') && this.props.errorStatusCode !== 403)  {
      this.props.getData()
    }
  }

  render() {
    console.log(`render this.props.friends is: `, this.props.friends)
    return (
      <AppContainer>
        {/* Add routes */}
        <Route path='/login' component={Login} />
        <PrivateRoute
          exact path='/'
          component={FriendsList}
        />
        <PrivateRoute
          path='/add'
          component={Form}
          add
        />
        <PrivateRoute
          exact
          path='/update'
          component={Form}
          update
        />
        <PrivateRoute
          path='/delete'
          component={Form}
          delete
        />
        <PrivateRoute
          path='/friends/:id'
          component={Friend}
        />
        {this.props.friends.map(friend => (
          <PrivateRoute
            key={friend.id}
            path={`/friends/${friend.id}`}
            friend={friend}
            component={Friend}
          />
        ))}
        <PrivateRoute
          path='/update/:id'
          component={Form}
        />
        {this.props.friends.map(friend => (
          <PrivateRoute
            key={friend.id}
            path={`/update/${friend.id}`}
            component={Form}
            update
          />
        ))}
      </AppContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    errorStatusCode: state.errorStatusCode
  }
}

export default withRouter(connect(mapStateToProps, { getData })(App))
