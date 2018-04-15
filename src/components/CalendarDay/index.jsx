import React from 'react'
import { connect } from 'react-redux'
import './style.scss'
import { setSelectedDay, setSelectedDaySchedule } from '../../actions'
import stringifyMoment from '../../helpers/stringifyMoment'
import { SchedulePlaceholder } from '../SchedulePlaceholder'

const renderSchedulePlaceholder = <SchedulePlaceholder/>

export class CalendarDay extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(selectedDay, mode) {
    mode === 'draftTimeline' ? this.props.setSelectedDay(selectedDay) : this.props.setSelectedDaySchedule(selectedDay)
  }

  isSelected(day, selectedDayFirst, selectedDaySecond) {
    return (stringifyMoment(selectedDayFirst) === stringifyMoment(day)) || (stringifyMoment(selectedDaySecond) === stringifyMoment(day))
  }

  isOnSelectedSlot(day, selectedDayFirst, selectedDaySecond) {
    return day.isBefore(selectedDaySecond) && day.isAfter(selectedDayFirst)
  }

  render() {
    const { dayNumber, dayName, day, selectedDayFirst, selectedDaySecond, mode } = this.props
    return(
      <div
        className={
          `day ${mode} ${ this.isSelected(day, selectedDayFirst, selectedDaySecond) ? "selected" : "unselected" } 
          ${ this.isOnSelectedSlot(day, selectedDayFirst, selectedDaySecond) ? "on-selected-slot" : "" }`
        }
        onClick={this.handleClick.bind(this, day, mode)}>
        <div className="dayName">
          {dayName}
        </div>
        <div className="dayNumber">
          {dayNumber}
        </div>
        {renderSchedulePlaceholder}
      </div>
    )
  }
}

const mapStateToProps = ({ selection }) => ({
  selectedDayFirst: selection.selectedDayFirst,
  selectedDaySecond: selection.selectedDaySecond,
})

const mapDispatchToProps = {
  setSelectedDay,
  setSelectedDaySchedule,
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDay)
