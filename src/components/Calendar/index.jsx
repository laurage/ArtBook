import React from 'react'
import moment from 'moment'
import './style.css'

import { MONTH } from '../../constants'

import { CalendarMonth } from '../CalendarMonth'
import { ChevronLeft, ChevronRight } from '../SvgIcons'

export class Calendar extends React.Component {
  constructor() {
    super()
    this.state = {
      displayedMoment: moment.utc(), // without .utc, selectedDay is one day off.
      // But using utc might break calendar use with different locales
      // momentjs documentation discusses utc use. http://momentjs.com/guides/#/parsing/local-utc-zone/
    }

    this.handleClickLeft = this.handleClickLeft.bind(this)
    this.handleClickRight = this.handleClickRight.bind(this)
  }

  handleClickLeft() {
    this.setState({
      displayedMoment: this.state.displayedMoment.subtract(1, 'month'),
    })
  }

  handleClickRight() {
    this.setState({
      displayedMoment: this.state.displayedMoment.add(1, 'month'),
    })
  }

  render() {
    console.log(this.state.displayedMoment)
    return (
      <div>
        <div className="month-name">
          {`${MONTH[this.state.displayedMoment.month()]} ${this.state.displayedMoment.year()}`}
        </div>
        <span className="chevron" onClick={this.handleClickLeft}>
          <ChevronLeft/>
        </span>
        <span className="chevron" onClick={this.handleClickRight}>
          <ChevronRight/>
        </span>
        <CalendarMonth displayedMoment={this.state.displayedMoment}/>
      </div>
    )
  }
}
