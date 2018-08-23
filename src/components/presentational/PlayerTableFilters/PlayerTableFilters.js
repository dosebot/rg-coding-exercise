import React from 'react'
import { FormGroup, Checkbox, FormControl } from 'react-bootstrap'

import './PlayerTableFilters.css'

const PlayerTableFilters = ({ toggleCheckbox }) => {
  return (
    <div className="PlayerTableFilters">
      <FormGroup>
        <Checkbox
          inline
          onChange={() => {
            toggleCheckbox('qb')
          }}
        >
          QB
        </Checkbox>
        <Checkbox
          inline
          onChange={() => {
            toggleCheckbox('rb')
          }}
        >
          RB
        </Checkbox>
        <Checkbox
          inline
          onChange={() => {
            toggleCheckbox('wr')
          }}
        >
          WR
        </Checkbox>
        <Checkbox
          inline
          onChange={() => {
            toggleCheckbox('te')
          }}
        >
          TE
        </Checkbox>
      </FormGroup>
      <FormControl type="text" placeholder="Search by Name" />
    </div>
  )
}

export default PlayerTableFilters
