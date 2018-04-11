import React from 'react'
import './style.css'

export class CalendarDay extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      selected: true,
    })
  }
  render() {
    const { dayNumber, dayName } = this.props
    return(
      <div
        className={`day ${ this.state.selected ? "selected" : "unselected" }`}
        onClick={this.handleClick}>
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
