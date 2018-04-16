import React from 'react'
import { connect } from 'react-redux'
import './style.scss'
import { setSelectedDay, setSelectedDaySchedule } from '../../actions'
import isWeekDay from '../../helpers/isWeekDay'
import dayIsSelected from '../../helpers/dayIsSelected'
import dayIsOnSelectedSlot from '../../helpers/dayIsOnSelectedSlot'

export class CalendarDaySplash extends React.Component {
  handleClick(selectedDay) {
    this.props.setSelectedDay(selectedDay)
  }

  render() {
    const { dayNumber, dayName, day, selectedDayFirst, selectedDaySecond, mode, typeOfCell } = this.props
    return(
      <div
        className={
          `day
          ${ dayIsSelected(day, selectedDayFirst, selectedDaySecond) ? "selected" : "unselected" }  
          ${ dayIsOnSelectedSlot(day, selectedDayFirst, selectedDaySecond) ? "on-selected-slot" : "" }`
        }
        onClick={mode === "draftTimeline" ? this.handleClick.bind(this, this.props.day) : undefined}>
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