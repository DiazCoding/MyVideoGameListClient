import React, {Component} from 'react'
import logo from '../images/logo.svg'
import '../styles/App.scss'
import {Route, Link} from 'react-router-dom'
import SignIn from '../components/sign_in'
import GameWidget from '../components/GameWidget'
import axios from 'axios'
import {map} from 'ramda'
import GamesContainer from '../components/GamesContainer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      games: []
    }
  }
  componentWillMount() {
    axios.get('http://localhost:4741/games')
      .then((res) => {
        this.setState({
          games: res.data
        })
      })
  }
  renderGameWidgets() {
    return this.state.games.map((game) => {
      return (<GameWidget key = {
        game.table.id
      } { ...game.table
      }
      />)
    })
  }
  render() {
    return (
      <div>
        <nav>
          <SignIn />
        </nav>
        <h1>We are in the right componentfgdfgfdg</h1>
        <GamesContainer>{this.renderGameWidgets()}</GamesContainer>
      </div>
    )
  }

}


export default App