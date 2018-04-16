import React from 'react'
import './style.scss'
import { DAYS } from '../../constants'

import CalendarDaySplash from '../CalendarDaySplash'

export class CalendarWeek extends React.Component {
  render() {
    const { week, mode } = this.props
    let daysOfWeekBackground = []
    let daysOfWeekForeground = []
    for(let i = 0; i <= 6; i++) {
      if (mode === 'draftTimeline') {
        daysOfWeekBackground.push(<CalendarDaySplash key={week[i]} day={week[i]} mode={mode} dayName={DAYS[i]} dayNumber={week[i].date()}/>)
      }
      // daysOfWeekForeground.push(<CalendarDay key={week[i]} day={week[i]} mode={mode} typeOfCell={'cell-foreground'}/>)
    }
    return(
      <div className="week-container">
        {mode === 'draftTimeline' && 
          (<div className="week-bg">
            {daysOfWeekBackground}
          </div>)
        }
        {mode === 'draftSchedules' && 
          (<div className="week-content">
            {daysOfWeekForeground}
          </div>)
        }
      </div>
    )
  }
}
