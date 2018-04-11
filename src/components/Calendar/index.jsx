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
      displayedMoment: moment(),
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
