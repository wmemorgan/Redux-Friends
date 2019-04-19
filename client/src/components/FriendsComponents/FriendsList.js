import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { FriendsListContainer, Preview } from './FriendsStyleComponents'

import { getData } from '../../actions'

export class FriendsList extends Component {
  componentDidMount() {
    this.props.getData()
  }

  render() {
    const { friends } = this.props
    return (
      <FriendsListContainer>
        <h1>Friends of Lambda School</h1>
        {friends.length > 0 ? (friends.map(friend => (
          <Link key={friend.id} to={`/friends/${friend.id}`}>
            <Preview>
              <div>{friend.name}</div>
              <div>id: {friend.id}</div>
            </Preview>
          </Link>
        ))) : (
            <h2>Loading...</h2>
          )}
      </FriendsListContainer>
    )
  }
}

const mapStateToProps = ({ fetchingData, friends }) => ({
  fetchingData,
  friends
})

export default connect(mapStateToProps, { getData })(FriendsList)