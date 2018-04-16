import React from 'react'
import { connect } from 'react-redux'
import './style.scss'
import { setSelectedDay, setSelectedDaySchedule } from '../../actions'
import stringifyMoment from '../../helpers/stringifyMoment'

export class CalendarDaySplash extends React.Component {
  handleClick(selectedDay) {
    this.props.setSelectedDay(selectedDay)
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
    const { dayNumber, dayName, day, selectedDayFirst, selectedDaySecond, mode, typeOfCell } = this.props
    return(
      <div
        className={
          `day
          ${ this.isSelected(day, selectedDayFirst, selectedDaySecond) ? "selected" : "unselected" }  
          ${ this.isOnSelectedSlot(day, selectedDayFirst, selectedDaySecond) ? "on-selected-slot" : "" }`
        }
        onClick={this.handleClick.bind(this, this.props.day)}>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDaySplash)