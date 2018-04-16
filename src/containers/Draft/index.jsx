import React from 'react'
import { connect } from 'react-redux'
import './style.scss'

import { Calendar } from '../../components/Calendar'
import { Button } from '../../components/Button'
import SchedulesPopUp from '../../components/SchedulesPopUp'
import Navigation from '../../components/Navigation'
import InstructionBar from '../../components/InstructionBar'
import Footing from '../../components/Footing'

export class Draft extends React.Component {
  render() {
    const { data, selectedDayScheduleSecond, numberOfArtistsToBook } = this.props
    return (
      <div className="">
        <Navigation/>
        <div className="box-container-top box-container--grey">
          <InstructionBar title={data && data.title} instructions={data && data.instructions}/>
        </div>
        <div className="box-container-top">
          <Calendar mode="draftSchedules"/>
          { selectedDayScheduleSecond &&
            (<div className="">
              <SchedulesPopUp/>
            </div>)
          }
        </div>
        <div className="box-container-top box-container--grey">
            <Button linkTo={data && data.button && data.button.linkTo}>{data && data.button && data.button.title}</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({selection}) => ({
  selectedDayScheduleSecond: selection.selectedDayScheduleSecond,
  numberOfArtistsToBook: selection.numberOfArtistsToBook,
})

export default connect(mapStateToProps, null)(Draft)