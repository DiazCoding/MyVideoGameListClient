import React, { Component } from 'react'
import logo from '../images/logo.svg'
import '../styles/App.scss'
import { Route, Link } from 'react-router-dom'
import SignIn from '../components/sign_in'
import Dashboard from '../components/dashboard'

const App = () => (
  <div>
    <nav>
      <SignIn />
    </nav>
    <h1>Welcome to React!</h1>
    <Dashboard />
  </div>
)

export default App