import React from 'react'
import './style.css'
import { createWeeksMatrix } from '../../helpers'
import { CalendarWeek } from '../CalendarWeek'

export class CalendarMonth extends React.Component {

  render() {
    const { displayedMoment } = this.props

    let matrix = []

    createWeeksMatrix(displayedMoment).map((week) => {
      matrix.push(<CalendarWeek key={week} week={week}/>)
    })

    return(
      <div className="calendar">
        {matrix}
      </div>
    )
  }
}
