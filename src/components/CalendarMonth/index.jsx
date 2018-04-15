import React from 'react'
import './style.scss'
import { createWeeksMatrix } from '../../helpers'
import { CalendarWeek } from '../CalendarWeek'

export class CalendarMonth extends React.Component {

  render() {
    const { displayedMoment, mode } = this.props

    let matrix = []

    createWeeksMatrix(displayedMoment).map((week) => {
      matrix.push(<CalendarWeek key={week} week={week} mode={mode}/>)
    })

    return(
      <div className="calendar">
        {matrix}
      </div>
    )
  }
}
