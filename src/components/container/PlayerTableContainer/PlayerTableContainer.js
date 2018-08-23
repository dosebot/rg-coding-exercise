import React, { Component } from 'react'

import { fetchPlayers } from './apiCalls'

import PlayerTable from '../../presentational/PlayerTable'
import PlayerTableFilters from '../../presentational/PlayerTableFilters'

export function sortPlayersByDesc(players = [], property = 'height') {
  const sortedPlayers = players.sort((a, b) => {
    if (a[property] > b[property]) return -1
    if (a[property] < b[property]) return 1
    return 0
  })
  return sortedPlayers
}

export function sortPlayersByAsc(players = [], property = 'height') {
  const sortedPlayers = players.sort((a, b) => {
    if (a[property] < b[property]) return -1
    if (a[property] > b[property]) return 1
    return 0
  })
  return sortedPlayers
}

class PlayerTableContainer extends Component {
  state = {
    players: [],
  }
  componentDidMount = async () => {
    const players = await fetchPlayers()
    this.setState({ players })
  }

  foo(element) {
    console.log(element)
  }

  render() {
    const { players } = this.state
    return (
      <div>
        <PlayerTableFilters />
        <PlayerTable players={players} foo={this.foo} />
      </div>
    )
  }
}
export default PlayerTableContainer
