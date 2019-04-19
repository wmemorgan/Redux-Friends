import React, { Component } from 'react'
import { LoginContainer, LoginForm } from './LoginStyles'
import Button from '../DesignComponents/Button'

class Login extends Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  // Capture username from input field
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
          <Button add>Login</Button>
        </LoginForm>
      </LoginContainer>
    )
  }
}

export default Login
