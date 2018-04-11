import React from 'react'
import './style.css'

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

  handleClick(selectedDay) {
    console.log(selectedDay)

    if (this.state.selectedCellId.first === null) {
      console.log('first cell')
      // here we are changing the state of the cell itself, so everytime we click on a different cell its first cell is null. So instead we need to
      // pass our selectedCellId to the global state (ie use redux)
      this.setState({
        selected: true,
        selectedCellId: {
          first: selectedDay
        }
      })
    }
  }
  render() {
    const { dayNumber, dayName, day } = this.props
    return(
      <div
        className={`day ${ this.state.selected ? "selected" : "unselected" } ${ this.state.onSelectedSlot ? "on-selected-slot" : "" }`}
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
