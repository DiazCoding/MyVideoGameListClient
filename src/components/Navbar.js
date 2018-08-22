import React from 'react'
import '../styles/Navbar.css'
import React from 'react'
import config from '../../config/config'
import axios from 'axios'

const SignUp = props => {
  const handleSignUp = e => {
    e.preventDefault()
    const formData = {}
    for(let field of e.target.elements) {
      if (field.name === '') {
        continue
      }
      formData[field.name] = field.value 
    }
    console.log(formData)
  }
  return (
    <form id="sign-up-form" onSubmit={handleSignUp}>
      <input type="text" name="username" placeholder="Username"/>
      <input type="password" name="password" placeholder="Password" />
      <input type="password" name="password_confirmation" placeholder="Confirm Password"/>
      <button type="submit">Submit</button>
    </form>
  )
}

const SignIn = props => {
  const handleSignUp = e => {
    e.preventDefault()
    const formData = {}
    for(let field of e.target.elements) {
      if (field.name === '') {
        continue
      }
      formData[field.name] = field.value 
    }
    console.log(formData)
  }
  return (
    <form id="sign-in-form" onSubmit={handleSignUp}>
      <input type="text" name="username" placeholder="Username"/>
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default SignUp