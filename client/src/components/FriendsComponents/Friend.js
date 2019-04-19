import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"

import { FriendInfoContainer, ButtonMenu } from './FriendsStyleComponents'
import Button from '../DesignComponents/Button'

export const Friend = props => {
  console.log(`Friend props: `, props)
  const { name, id, age, email } = props.friend
  return (
    <FriendInfoContainer>
      <h3>{name}</h3>
      <p><span className="stat-category">ID:</span> {id}</p>
      <p><span className="stat-category">Age:</span> {age}</p>
      <p><span className="stat-category">Email:</span> {email}</p>
      <ButtonMenu>
        <Link to={`/update/${id}`}>
          <Button update>Update</Button>
        </Link>
        <Button delete onClick={() => props.deleteFriend(id)}>Delete</Button>
      </ButtonMenu>
    </FriendInfoContainer>
  )
}

Friend.propType = {
  name: PropTypes.string,
  age: PropTypes.number,
  email: PropTypes.string
}

export default Friend