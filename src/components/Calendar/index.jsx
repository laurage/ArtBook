import React from 'react'
import moment from 'moment'
import './style.scss'

import { MONTH } from '../../constants'

import { CalendarMonth } from '../CalendarMonth'
import { ChevronLeft, ChevronRight } from '../SvgIcons'

export class Calendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayedMoment: moment.utc(), // without .utc, selectedDay is one day off.
      // But using utc might break calendar use with different locales
      // momentjs documentation discusses utc use. http://momentjs.com/guides/#/parsing/local-utc-zone/
    }

    this.showPreviousMonth = this.showPreviousMonth.bind(this)
    this.showNextMonth = this.showNextMonth.bind(this)
  }

  showPreviousMonth() {
    this.setState({
      displayedMoment: this.state.displayedMoment.subtract(1, 'month'),
    })
  }

  showNextMonth() {
    this.setState({
      displayedMoment: this.state.displayedMoment.add(1, 'month'),
    })
  }

  render() {
    const { mode } = this.props
    return (
      <div>
        <div className="box-container-in calendar-header">
          <div className="month-name">
            {`${MONTH[this.state.displayedMoment.month()]} ${this.state.displayedMoment.year()}`}
          </div>
          <span className="chevron" onClick={this.showPreviousMonth}>
            <ChevronLeft/>
          </span>
          <span className="chevron" onClick={this.showNextMonth}>
            <ChevronRight/>
          </span>
        </div>
        <div className="box-container-in">
          <CalendarMonth displayedMoment={this.state.displayedMoment} mode={mode}/>
        </div>
      </div>
    )
  }
}
