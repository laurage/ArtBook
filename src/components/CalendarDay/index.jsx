import React from 'react'
import { connect } from 'react-redux'
import './style.css'
import { setSelectedDay, getSelectedDay } from '../../actions'

export class CalendarDay extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: false,
      onSelectedSlot: false,
      selectedCellId: {
        first: null,
        second: null,
      }
    }
    this.handleClick = this.handleClick.bind(this)
  }

  ComponentWillUpdate() {
    this.props.getSelectedDay()
  }

  handleClick(selectedDay) {
    this.props.setSelectedDay(selectedDay)
  }

  isSelected(day, selectedDayFirst, selectedDaySecond) {
    return (selectedDayFirst === day) || (selectedDaySecond === day)
  }

  isOnSelectedSlot(day, selectedDayFirst, selectedDaySecond) {
    return day.isBefore(selectedDaySecond) && day.isAfter(selectedDayFirst)
  }

  render() {
    const { dayNumber, dayName, day, selectedDayFirst, selectedDaySecond } = this.props
    return(
      <div
        className={`day ${ this.isSelected(day, selectedDayFirst, selectedDaySecond) ? "selected" : "unselected" } ${ this.isOnSelectedSlot(day, selectedDayFirst, selectedDaySecond) ? "on-selected-slot" : "" }`}
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
