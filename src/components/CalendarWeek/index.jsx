import React from 'react'
import './style.scss'
import { DAYS } from '../../constants'

import CalendarDay from '../CalendarDay'

export class CalendarWeek extends React.Component {
  render() {
    const { week, mode } = this.props
    let daysOfWeekBackground = []
    let daysOfWeekForeground = []
    for(let i = 0; i <= 6; i++) {
      daysOfWeekBackground.push(<CalendarDay key={week[i]} day={week[i]} mode={mode} dayName={DAYS[i]} dayNumber={week[i].date()} typeOfCell={'cell-bg'}/>)
      daysOfWeekForeground.push(<CalendarDay key={week[i]} day={week[i]} mode={mode} typeOfCell={'cell-foreground'}/>)
    }
    return(
      <div className="week-container">
        <div className="week-bg">
          {daysOfWeekBackground}
        </div>
        <div className="week-content">
          {daysOfWeekForeground}
        </div>
      </div>
    )
  }
}
