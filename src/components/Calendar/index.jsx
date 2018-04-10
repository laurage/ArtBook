import React from 'react'
import moment from 'moment'
import './style.css'

import { MONTH } from '../../constants'

import { CalendarDay } from '../CalendarDay'
import { CalendarWeek } from '../CalendarWeek'
import { CalendarMonth } from '../CalendarMonth'

export class Calendar extends React.Component {
  render() {
    const currentDate = moment()

    console.log('currentDate', currentDate)

    return (
      <CalendarMonth currentDate={currentDate} monthName={MONTH[currentDate.month()]}/>
    )
  }
}
