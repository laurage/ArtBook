import React from 'react'
import './style.css'
import moment from 'moment'

import { CalendarWeek } from '../CalendarWeek'

export class CalendarMonth extends React.Component {
  render() {

    const { currentDate } = this.props
    const startOfMonth = moment(currentDate).startOf('month')
    const numberOfDaysFromPreviousMonthOnPanel = (startOfMonth.day() === 0) ? 6 : startOfMonth.day() - 1
    // const endOfMonth = moment(currentDate).subtract(1, 'month').endOf('month')
    // const numberOfDaysPreviousMonth = currentDate.subtract(1,'months').endOf('month').date()
    const startOfCurrentPanel = startOfMonth.clone().subtract(numberOfDaysFromPreviousMonthOnPanel, 'day')

    console.log('startOfMonth', startOfMonth)
    console.log('numberOfDaysFromPreviousMonthOnPanel', numberOfDaysFromPreviousMonthOnPanel)
    console.log('startOfCurrentPanel', startOfCurrentPanel)

    const weeksOnPanel = [];
    const day = startOfCurrentPanel.clone();

    for (let i = 0; i < 35; i += 1) {
      // at 0, 7, 14, 21, 28 we create a new array that we push in our matrix of arrays, weeksOnPanel
      if (i % 7 === 0) {
        weeksOnPanel.push([]);
      }

      // we push our day in the last array created in weeksOnPanel
      weeksOnPanel[weeksOnPanel.length - 1].push(day)

      day.add(1, 'day');
      console.log('weeksOnPanel', weeksOnPanel)

    }


    const { monthName } = this.props
    return(
      <div>
        <div className="month-name">
          {monthName}
        </div>
        <div className="calendar">
          <CalendarWeek startOfTheWeekNumber={26}/>
          <CalendarWeek startOfTheWeekNumber={12}/>
        </div>
      </div>
    )
  }
}
