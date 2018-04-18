import React from 'react'
import { connect } from 'react-redux'
import './style.scss'
import { setSelectedDay, setSelectedDaySchedule } from '../../actions'
import isWeekDay from '../../helpers/isWeekDay'
import dayIsSelected from '../../helpers/dayIsSelected'
import dayIsOnSelectedSlot from '../../helpers/dayIsOnSelectedSlot'

export class CalendarDayFilo extends React.Component {
  handleClick(selectedDay) {
    this.props.setSelectedDaySchedule(selectedDay)
  }

  render() {
    const { day, selectedDayScheduleFirst, selectedDayScheduleSecond } = this.props
    return(
      <div
        className={
          `day
          ${isWeekDay(day) &&
          (dayIsSelected(day, selectedDayScheduleFirst, selectedDayScheduleSecond) 
          || dayIsOnSelectedSlot(day, selectedDayScheduleFirst, selectedDayScheduleSecond)) ? "selected" : "unselected" }`
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