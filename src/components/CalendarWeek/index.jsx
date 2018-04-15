import React from 'react'
import './style.scss'
import { DAYS } from '../../constants'

import CalendarDay from '../CalendarDay'

export class CalendarWeek extends React.Component {
  render() {
    const { week, mode } = this.props
    let daysOfWeekNumbers = []
    for(let i = 0; i <= 6; i++) {
      daysOfWeekNumbers.push(<span key={week[i]}><CalendarDay dayName={DAYS[i]} dayNumber={week[i].date()} day={week[i]} mode={mode}/></span>)
    }
    return(
      <div className="week">
        {daysOfWeekNumbers}
      </div>
    )
  }
}
