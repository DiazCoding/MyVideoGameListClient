import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

// import apiUrl from '../../config/paths'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email:'',
      password:''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    console.log(this)
    this.setState({ [e.target.name]: e.target.value })
    console.log(this)
  } 

  handleSignIn(e) {
    e.preventDefault()
    const { email, password } = this.state
    // TODO get the token into App
    axios.post('http://localhost:3000/sign-in', {credentials:{ email, password }})
      .then(res => this.setUserToken(res.data.user.token))
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  setUserToken(userToken) {
    console.log(userToken)
    window.localStorage.setItem('userToken', userToken)
  }

  render() {
    const { email, password } = this.state
    return (
      <div> Sign In 
        <form>
          <input type='text'
            name='email'
            placeholder='Email'
            value={email} 
            onChange={this.handleChange} />
          <input type='password'
            name='password'
            placeholder='Password'
            value={password} 
            onChange={this.handleChange}/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default SignIn