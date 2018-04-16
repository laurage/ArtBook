import React from 'react'
import './style.scss'
import { DAYS } from '../../constants'

import CalendarDaySplash from '../CalendarDaySplash'
import CalendarDayFilo from '../CalendarDayFilo'

export class CalendarWeek extends React.Component {
  render() {
    const { week, mode } = this.props

    let daysOfWeekBackground = []
    let daysOfWeekForeground = []
    for(let i = 0; i <= 6; i++) {
      daysOfWeekBackground.push(<CalendarDaySplash key={week[i]} day={week[i]} mode={mode} dayName={DAYS[i]} dayNumber={week[i].date()}/>)
      if (mode === 'draftSchedules') {
        daysOfWeekForeground.push(<CalendarDayFilo key={week[i]} day={week[i]} mode={mode}/>)
      }
    }
    return(
      <div className="week-container">
        {mode === 'draftTimeline' && 
          (<div className="week-bg">
            {daysOfWeekBackground}
          </div>)
        }
        {mode === 'draftSchedules' && 
          (<div>
            <div className="week-bg-disabled">
              {daysOfWeekBackground}
            </div>
            <div className="week-content">
              {daysOfWeekForeground}
            </div>
          </div>)
        }
      </div>
    )
  }
}
