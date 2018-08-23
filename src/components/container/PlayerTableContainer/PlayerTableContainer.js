import React, { Component } from 'react'

import { fetchPlayers } from './apiCalls'

import PlayerTable from '../../presentational/PlayerTable'
import PlayerTableFilters from '../../presentational/PlayerTableFilters'

export function sortPlayers(players = [], property = 'height', sortOrder) {
  const ascCompare = (a, b) => {
    if (a[property] < b[property]) return -1
    if (a[property] > b[property]) return 1
    return 0
  }
  const descCompare = (a, b) => {
    if (a[property] > b[property]) return -1
    if (a[property] < b[property]) return 1
    return 0
  }

  const compare = sortOrder === 'asc' ? ascCompare : descCompare

  const sortedPlayers = players.slice().sort(compare)
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
