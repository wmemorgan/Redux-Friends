import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Loader from 'react-loader-spinner'
import { Button } from 'reactstrap'
import { FriendsListContainer, Preview, SpinnerContainer } from './FriendsStyleComponents'

class FriendsList extends Component {
  render() {
    const { friends } = this.props
    return (
      <FriendsListContainer>
        <h1>Friends of Lambda School</h1>
        <Button>Press Me</Button>
        {friends.length > 0 ? (friends.map(friend => (
          <Link key={friend.id} to={`/friends/${friend.id}`}>
            <Preview>
              <div>{friend.name}</div>
              <div>id: {friend.id}</div>
            </Preview>
          </Link>
          ))) : (
          <SpinnerContainer>
            <h2>Loading...</h2>
            <Loader type="Puff" color="#265077" height="60" width="60" />
          </SpinnerContainer>
        )}
      </FriendsListContainer>
    )
  }
}

const mapStateToProps = ({ fetchingData, friends }) => ({
  fetchingData,
  friends
})

export default connect(mapStateToProps, {})(FriendsList)