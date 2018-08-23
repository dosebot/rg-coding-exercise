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
  constructor(props) {
    super(props)

    this.state = {
      players: [],
      property: 'height',
      sortOrder: 'asc',
      customSort: false,
      checkbox: '',
    }
    this.toggleSortOrder = this.toggleSortOrder.bind(this)
    this.toggleCheckbox = this.toggleCheckbox.bind(this)
  }

  componentDidMount = async () => {
    const players = await fetchPlayers()
    this.setState({ players })
  }

  toggleSortOrder(element) {
    const { sortOrder, customSort } = this.state
    const newSortOrder = sortOrder === 'asc' ? 'dsc' : 'asc'
    if (customSort === false) {
      this.setState({ customSort: true })
    }
    if (customSort) {
      this.setState({ sortOrder: newSortOrder, property: element })
    }
  }

  toggleCheckbox(element) {
    const { checkbox } = this.state
    const checkElement = checkbox === element ? '' : element
    this.setState({ checkbox: checkElement })
  }

  render() {
    const { players, customSort, property, sortOrder } = this.state
    const playerFeed = customSort
      ? sortPlayers(players, property, sortOrder)
      : players
    return (
      <div>
        <PlayerTableFilters toggleCheckbox={this.toggleCheckbox} />
        <PlayerTable
          players={playerFeed}
          toggleSortOrder={this.toggleSortOrder}
        />
      </div>
    )
  }
}
export default PlayerTableContainer
