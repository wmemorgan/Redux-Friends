import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

import { getData } from '../../actions'

import FriendsList from '../FriendsComponents/FriendsList'
import Friend from '../FriendsComponents/Friend'
import Form from '../SharedComponents/Form'
import Login from '../Login/Login'

class Routes extends Component {
  componentDidMount() {
    if (localStorage.getItem('token') && this.props.errorStatusCode !== 403) {
      this.props.getData()
    }
  }

  render() {
    console.log(`render this.props.friends is: `, this.props.friends)
    return (
      <>
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
        {/* <PrivateRoute
          path='/friends/:id'
          component={Friend}
        /> */}
        {this.props.friends.map(friend => (
          <PrivateRoute
            key={friend.id}
            path={`/friends/${friend.id}`}
            friend={friend}
            component={Friend}
          />
        ))}
        {/* <PrivateRoute
          path='/update/:id'
          component={Form}
        /> */}
        {this.props.friends.map(friend => (
          <PrivateRoute
            key={friend.id}
            path={`/update/${friend.id}`}
            component={Form}
            update
          />
        ))}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    errorStatusCode: state.errorStatusCode
  }
}

export default withRouter(connect(mapStateToProps, { getData })(Routes))
