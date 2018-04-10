import React from 'react'
import './style.css'
import { DAYS } from '../../constants'

import { CalendarDay } from '../CalendarDay'

export class CalendarWeek extends React.Component {
  render() {
    let weekDayNumber = this.props.startOfTheWeekNumber
    let week = []
    for(let i = 0; i <= 6; i++) {
      // It seems that Airbnb is building the whole matrix's month in the month and then passing it to the weeks. See getCalendarMonthWeeks
      // weeks is mapped over in CalendarMonth.jsx
      // week1 = ['day1', 'day2', ...]
      // weeks = ['week1', 'week2', ...]
      week.push(<span key={weekDayNumber}><CalendarDay dayName={DAYS[i]} dayNumber={weekDayNumber}/></span>)
      weekDayNumber = weekDayNumber+1

      // !!!! If instead of converting in pure figures, I keep passing this as dates, then I don't have to struggle for when I'm jumping from
      // one month to another (ie from 31 to 1 for example). Because then it does it automatically. All I have to do is a .date() or similar
      // to keep only the number. And that means I keep intact my dates as I pass them, so potentially easier if I want to do something different with it.
    }
    return(
      <div className="week">
        {week}
      </div>
    )
  }
}
