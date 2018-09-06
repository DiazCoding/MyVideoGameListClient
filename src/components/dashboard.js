import React, { Component } from 'react'
import axios from 'axios'
import { map } from 'ramda'

import GameWidget from '../components/gameidget'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dashboardGames: []
    }
  }

  componentDidMount() {
    this.fetchDashboardGames()
  }

  fetchDashboardGames() {
    axios.get('http://localhost:4741/games')
      .then(results => this.setState({ dashboardGames: results.data}))
  }

  render() {
    const { dashboardGames } = this.state

    return map(game => <GameWidget key={game.table.id} {...game.table} />, dashboardGames)
  }
}

export default Dashboard