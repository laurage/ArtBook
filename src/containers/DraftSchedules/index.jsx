import React from 'react'
import './style.scss'

import { Calendar } from '../../components/Calendar'
import { Button } from '../../components/Button'

export class DraftSchedules extends React.Component {
  render() {
    return (
      <div className="box-container-top">
        <Calendar/>
        <div className="box-container-in">
          <Button>SAVE DRAFT SCHEDULES</Button>
        </div>
      </div>
    )
  }
}
