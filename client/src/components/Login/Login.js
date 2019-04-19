import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import { login } from '../../actions'

import { LoginContainer, LoginForm } from './LoginStyles'
import Button from '../DesignComponents/Button'

class Login extends Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  // Capture data from input fields
  handleInput = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  handleLogin = e => {
    e.preventDefault()
    this.props.login(this.state.credentials).then(() => {
      if (this.props.errorStatusCode === 403) {
        return
      } else {
        this.props.history.push('/')
      }
    }).catch(() => this.props.history.push('/login'))
  }

  render() {
    return (
      <LoginContainer>
        <LoginForm onSubmit={this.handleLogin} login>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleInput}
          />
          <input 
            type="password"
            name="password"
            placeholder="Password" 
            value={this.state.credentials.password}
            onChange={this.handleInput}
          />
          <Button add>
            {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="white" height="12" width="26"/>
            ) : `Login`
            }
          </Button>
        </LoginForm>
        {this.props.error && <p className="error">{this.props.error}</p>}
      </LoginContainer>
    )
  }
}

const mapStateToProps = ({ logginIn, error, errorStatusCode }) => ({
  logginIn,
  error,
  errorStatusCode
})

export default connect(mapStateToProps, { login })(Login)
