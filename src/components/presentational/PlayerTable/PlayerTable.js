import React from 'react'
import { Table } from 'react-bootstrap'
import Proptypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PlayerRow from '../PlayerRow'

const PlayerTable = ({ players, toggleSortOrder }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>
            Name
            <button
              onClick={() => {
                toggleSortOrder('name')
              }}
            >
              <FontAwesomeIcon icon="sort" />
            </button>
          </th>
          <th>Position</th>
          <th>Team</th>
          <th>
            Height{' '}
            <button
              onClick={() => {
                toggleSortOrder('height')
              }}
            >
              <FontAwesomeIcon icon="sort" />
            </button>
          </th>
          <th>
            Weight
            <button
              onClick={() => {
                toggleSortOrder('weight')
              }}
            >
              <FontAwesomeIcon icon="sort" />
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {players.map(player => <PlayerRow player={player} key={player.id} />)}
      </tbody>
    </Table>
  )
}

PlayerTable.propTypes = {
  players: Proptypes.array,
}

export default PlayerTable
