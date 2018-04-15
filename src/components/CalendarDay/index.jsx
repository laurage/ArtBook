import React from 'react'
import { connect } from 'react-redux'
import './style.css'
import { setSelectedDay } from '../../actions'
import stringifyMoment from '../../helpers/stringifyMoment'

export class CalendarDay extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(selectedDay) {
    this.props.setSelectedDay(selectedDay)
  }

  isSelected(day, selectedDayFirst, selectedDaySecond) {
    return (stringifyMoment(selectedDayFirst) === stringifyMoment(day)) || (stringifyMoment(selectedDaySecond) === stringifyMoment(day))
  }

  isOnSelectedSlot(day, selectedDayFirst, selectedDaySecond) {
    return day.isBefore(selectedDaySecond) && day.isAfter(selectedDayFirst)
  }

  render() {
    const { dayNumber, dayName, day, selectedDayFirst, selectedDaySecond } = this.props
    return(
      <div
        className={
          `day ${ this.isSelected(day, selectedDayFirst, selectedDaySecond) ? "selected" : "unselected" } 
          ${ this.isOnSelectedSlot(day, selectedDayFirst, selectedDaySecond) ? "on-selected-slot" : "" }`
        }
        onClick={this.handleClick.bind(this, day)}>
        <div className="dayName">
          {dayName}
        </div>
        <div className="dayNumber">
          {dayNumber}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ selectionPeriod }) => ({
  selectedDayFirst: selectionPeriod.selectedDayFirst,
  selectedDaySecond: selectionPeriod.selectedDaySecond,
})

const mapDispatchToProps = {
  setSelectedDay,
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDay)
