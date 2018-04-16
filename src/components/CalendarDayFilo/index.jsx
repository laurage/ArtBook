import React from 'react'
import { connect } from 'react-redux'
import './style.scss'
import { setSelectedDay, setSelectedDaySchedule } from '../../actions'
import stringifyMoment from '../../helpers/stringifyMoment'

export class CalendarDayFilo extends React.Component {
  handleClick(selectedDay) {
    this.props.setSelectedDaySchedule(selectedDay)
  }

  isSelected(day, selectedDayFirst, selectedDaySecond) {
    return (stringifyMoment(selectedDayFirst) === stringifyMoment(day)) || (stringifyMoment(selectedDaySecond) === stringifyMoment(day))
  }

  isOnSelectedSlot(day, selectedDayFirst, selectedDaySecond) {
    return day.isBefore(selectedDaySecond) && day.isAfter(selectedDayFirst)
  }

  isWeekDay(day) {
    return day.day() !== 6 && day.day() !== 0
  }

  render() {
    const { day, selectedDayScheduleFirst, selectedDayScheduleSecond } = this.props
    return(
      <div
        className={
          `day
          ${ this.isWeekDay(day) &&
          (this.isSelected(day, selectedDayScheduleFirst, selectedDayScheduleSecond) 
          || this.isOnSelectedSlot(day, selectedDayScheduleFirst, selectedDayScheduleSecond)) ? "selected" : "unselected" }`
        }
        onClick={this.handleClick.bind(this, this.props.day)}>
        <div className="schedule-placeholder"></div>
      </div>
    )
  }
}

const mapStateToProps = ({ selection }) => ({
  selectedDayScheduleFirst: selection.selectedDayScheduleFirst,
  selectedDayScheduleSecond: selection.selectedDayScheduleSecond,
})

const mapDispatchToProps = {
  setSelectedDaySchedule,
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDayFilo)


// `day ${mode} ${typeOfCell} 
// ${ this.isSelected(day, selectedDayFirst, selectedDaySecond) ? "selected" : "unselected" } 
// ${ this.isWeekDay(day) &&
//   (this.isSelected(day, selectedDayScheduleFirst, selectedDayScheduleSecond) 
//   || this.isOnSelectedSlot(day, selectedDayScheduleFirst, selectedDayScheduleSecond)) ? "selected-foreground" : "unselected-foreground" } 
// ${ this.isOnSelectedSlot(day, selectedDayFirst, selectedDaySecond) ? "on-selected-slot" : "" }`