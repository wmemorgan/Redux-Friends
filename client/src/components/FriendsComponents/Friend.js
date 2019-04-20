import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import PropTypes from "prop-types"

import { updateData } from '../../actions'

import { FriendInfoContainer, ButtonMenu } from './FriendsStyleComponents'
import Button from '../DesignComponents/Button'

class Friend extends Component {
  state = {
    edit: false,
    id: this.props.friend.id,
    name: '',
    age: '',
    email: ''
  }

  prePopulateForm = () => {
    const { name, age, email } = this.props.friend
    this.setState({
      name,
      age,
      email
    })
  }
  
  toggleEdit() {
    this.setState(prevState => (
      { edit: !prevState.edit }
    ),
      () => this.prePopulateForm()
    )
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleUpdate = () => {
    this.props.updateData(this.state)
    console.log(`Form submitted data sent: ${JSON.stringify(this.state)}`)

    // reset form fields
    this.setState({
      edit: false,
      id: this.props.friend.id,
      name: '',
      age: '',
      email: ''
    })    
  }

  render() {
    console.log(`Friend props: `, this.props)
    const { name, id, age, email } = this.props.friend
    return (
      <FriendInfoContainer>
        <header>
          <i className="far fa-edit" onClick={() => this.toggleEdit()}>
          </i>
          <i className="fa fa-trash"
            onClick={() => this.props.deleteSmurf(id)}>
          </i>
        </header>
        <div className="friend-info">
          {!this.state.edit ?
            <h3 className="stat-data">{name}</h3> :
            <input name="name" type="text"
              placeholder="Name" onChange={this.handleInput}
              value={this.state.name}
            />
          }
          <div className="stats">
            <div className="stat-category">Age:</div>
            {!this.state.edit ?
              <div className="stat-data">{age}</div> :
              <input name="age" type="number"
                placeholder="Age" onChange={this.handleInput}
                value={this.state.age}
              />
            }
            <div className="stat-category">Email:</div>
            {!this.state.edit ?
              <div className="stat-data">{email}</div> :
              <input
                onChange={this.handleInput}
                placeholder="email"
                value={this.state.email}
                name="email"
              />
            }
          </div>
          <ButtonMenu {...this.state} onClick={() => this.handleUpdate()}>
            <Button update>Update</Button>
          </ButtonMenu>
        </div>
      </FriendInfoContainer>
    )
  }
}

// Friend.propType = {
//   name: PropTypes.string,
//   age: PropTypes.number,
//   email: PropTypes.string
// }

export default connect(null, {updateData})(Friend)