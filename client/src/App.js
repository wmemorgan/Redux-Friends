import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import axios from 'axios'
import PrivateRoute from './components/SharedComponents/PrivateRoute'

import { getData } from './actions'

import AppContainer from './components/DesignComponents/AppStyles'
import FriendsList from './components/FriendsComponents/FriendsList'
import Friend from './components/FriendsComponents/Friend'
import Form from './components/SharedComponents/Form'
import Login from './components/Login/Login'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || '/'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
    console.log(`App props are: `, this.props)
  }

  updateFriends = data => {
    this.setState({ friends: data },
      () => console.log(`updateFriends invoked state is: `, this.state)
    )
  }

  deleteFriend = id => {
    console.log("Friend is being deleted")
    axios
      .delete(`${API_ENDPOINT}.netlify/functions/server/api/friends/${id}`)
      .then(response => {
        // Update main app state
        this.updateFriends(response.data)
        this.props.history.push('/')
      })
      .catch(err => console.log(err))
  };

  componentDidMount() {
    this.props.getData()
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
        {this.props.friends.map(friend => (
          <PrivateRoute
            key={friend.id}
            path={`/friends/${friend.id}`}
            friend={friend}
            component={Friend}
          />
        ))}
        {this.props.friends.map(friend => (
          <PrivateRoute
            key={friend.id}
            path={`/update/${friend.id}`}
            component={Form}
            update
          />
        ))}
      </AppContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  }
}

export default withRouter(connect(mapStateToProps, { getData })(App));
