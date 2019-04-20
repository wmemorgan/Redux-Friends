import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormContainer } from './FormStyles'
import Button from '../DesignComponents/Button'

import { addData, deleteData, updateData } from '../../actions'

// const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || '/'

class Form extends Component {
  state = {
    id: '',
    name: '',
    age: '',
    email: ''
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  addRecord = e => {
    // prevent default
    e.preventDefault()

    // gather form data
    let newRecord = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    }

    // send new record to api
    this.props.addData(newRecord)
    this.props.history.push('/')

    console.log(`Form submitted data sent: ${JSON.stringify(newRecord)}`)
    
    // reset form fields
    this.setState({
      name: '',
      age: '',
      email: ''
    })
  }

  updateRecord = e => {
    // prevent default
    e.preventDefault()
    // send updated record to api
    this.props.updateData(this.state)
    this.props.history.push(`/friends/${this.state.id}`)

    console.log(`Form submitted data sent: ${JSON.stringify(this.state)}`)
    
    // reset form fields
    this.setState({
      id: '',
      name: '',
      age: '',
      email: ''
    })
  }

  deleteRecord = e => {
    // prevent default
    e.preventDefault()
    // invoke the deleteFriend method and pass id
    this.props.deleteData(this.state.id)
    this.props.history.push('/')
    // reset form field
    this.setState({id: ''})
  }

   submitHandler = e => {
      e.preventDefault()
      if(this.props.update) {
        this.updateRecord(e)
      } else if(this.props.delete) {
        this.deleteRecord(e)
      } else {
        this.addRecord(e)
      }
  }

  // componentDidMount() {
  //   if(this.props.update) {
  //     this.prePopulateForm(this.props.id)
  //   }
  // }

  render() {
    return (
      <FormContainer {...this.props}>
        <div className="windowFrame"></div>
        <form onSubmit={this.submitHandler}>
          {(this.props.update || this.props.delete) && 
            <input name="id" type="number" 
              placeholder="ID" onChange={this.handleInput} 
              value={this.state.id} 
            />
          }
          {!this.props.delete && (
            <>
              <input name="name" type="text" 
                placeholder="Name" onChange={this.handleInput}
                value={this.state.name} 
              />
              <input name="age" type="number" 
                placeholder="Age" onChange={this.handleInput}
                value={this.state.age} 
              />
              <input name="email" type="email" 
                placeholder="Email" onChange={this.handleInput}
                value={this.state.email}
              />
            </>
          )}
          <Button type="submit" {...this.props}>
            {`${this.props.add ? 'Add' : ''} 
              ${this.props.update ? 'Update' : ''}  
              ${this.props.delete ? 'Delete' : ''}   
              Friend
            `}
          </Button>
        </form>
      </FormContainer>
    )
  }

}

export default connect(null, { addData, deleteData, updateData })(Form)