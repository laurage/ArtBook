import React from 'react'
import './style.css'
import { createWeeksMatrix } from '../../helpers'
import { CalendarWeek } from '../CalendarWeek'

export class CalendarMonth extends React.Component {

  render() {
    const { monthName, currentDate } = this.props

    let matrix = []
    let startOfTheWeekNumber

    createWeeksMatrix(currentDate).map((week) => {
      console.log('day', week[0].date())
      matrix.push(<CalendarWeek key={week} week={week}/>)
    })

    return(
      <div>
        <div className="month-name">
          {monthName}
        </div>
        <div className="calendar">
          {matrix}
        </div>
      </div>
    )
  }
}
