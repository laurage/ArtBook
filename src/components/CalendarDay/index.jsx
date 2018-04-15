import React from 'react'
import { connect } from 'react-redux'
import './style.scss'
import { setSelectedDay, setSelectedDaySchedule } from '../../actions'
import stringifyMoment from '../../helpers/stringifyMoment'

export class CalendarDay extends React.Component {
  handleClick(selectedDay, mode) {
    mode === 'draftTimeline' ? this.props.setSelectedDay(selectedDay) : this.props.setSelectedDaySchedule(selectedDay)
  }

  isSelected(day, selectedDayFirst, selectedDaySecond) {
    return (stringifyMoment(selectedDayFirst) === stringifyMoment(day)) || (stringifyMoment(selectedDaySecond) === stringifyMoment(day))
  }

  isOnSelectedSlot(day, selectedDayFirst, selectedDaySecond) {
    return day.isBefore(selectedDaySecond) && day.isAfter(selectedDayFirst)
  }

  isWeekDay(day) {
    return day.day() !== 0 && day.day() !== 1
  }

  render() {
    const { dayNumber, dayName, day, selectedDayFirst, selectedDaySecond, mode, typeOfCell, selectedDayScheduleFirst, selectedDayScheduleSecond } = this.props
    return(
      <div
        className={
          `day ${mode} ${typeOfCell} 
          ${ this.isSelected(day, selectedDayScheduleFirst, selectedDayScheduleSecond) ? "selected-foreground" : "unselected-foreground" } 
          ${ this.isOnSelectedSlot(day, selectedDayFirst, selectedDaySecond) ? "on-selected-slot" : "" }`
        }
        onClick={this.handleClick.bind(this, this.props.day, this.props.mode)}>
        {dayName &&
          (<div className="dayName">
            {dayName}
          </div>)
        }
        {dayNumber &&
          (<div className="dayNumber">
            {dayNumber}
          </div>)
        }
        {typeOfCell==='cell-foreground' &&
          (
            <div className="schedule-placeholder"></div>
          )}
      </div>
    )
  }
}

const mapStateToProps = ({ selection }) => ({
  selectedDayFirst: selection.selectedDayFirst,
  selectedDaySecond: selection.selectedDaySecond,
  selectedDayScheduleFirst: selection.selectedDayScheduleFirst,
  selectedDayScheduleSecond: selection.selectedDayScheduleSecond,
})

const mapDispatchToProps = {
  setSelectedDay,
  setSelectedDaySchedule,
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDay)


// `day ${mode} ${typeOfCell} 
// ${ this.isSelected(day, selectedDayFirst, selectedDaySecond) ? "selected" : "unselected" } 
// ${ this.isWeekDay(day) &&
//   (this.isSelected(day, selectedDayScheduleFirst, selectedDayScheduleSecond) 
//   || this.isOnSelectedSlot(day, selectedDayScheduleFirst, selectedDayScheduleSecond)) ? "selected-foreground" : "unselected-foreground" } 
// ${ this.isOnSelectedSlot(day, selectedDayFirst, selectedDaySecond) ? "on-selected-slot" : "" }`