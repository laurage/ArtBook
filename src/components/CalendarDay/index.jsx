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
    console.log(selectedDay)

    this.props.setSelectedDay(selectedDay)

    // if (this.state.selectedCellId.first === null) {
      // console.log('first cell')
      // this.setState({
      //   selected: true,
      //   selectedCellId: {
      //     first: selectedDay
      //   }
      // })
    // }
  }

  isSelected(day, selectedDay) {
    return selectedDay === day
  }

  render() {
    const { dayNumber, dayName, day, selectedDay } = this.props
    return(
      <div
        className={`day ${ this.isSelected(day, selectedDay) ? "selected" : "unselected" } ${ this.state.onSelectedSlot ? "on-selected-slot" : "" }`}
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
  selectedDay: selectionPeriod.selectedDay,
})

const mapDispatchToProps = {
  setSelectedDay,
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDay)
