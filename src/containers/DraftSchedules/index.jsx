import React from 'react'
import { connect } from 'react-redux'
import './style.scss'

import { Calendar } from '../../components/Calendar'
import { Button } from '../../components/Button'
import SchedulesPopUp from '../../components/SchedulesPopUp'

export class DraftSchedules extends React.Component {
  render() {
    const { selectedDayScheduleSecond, numberOfArtistsToBook } = this.props
    return (
      <div className="box-container-top">
        <Calendar mode="draftSchedules"/>
        <div className="box-container-in">
          <Button>SAVE DRAFT SCHEDULES</Button>
        </div>
        { selectedDayScheduleSecond &&
          (<div className="">
            <SchedulesPopUp/>
          </div>)
        }
      </div>
    )
  }
}

const mapStateToProps = ({selection}) => ({
  selectedDayScheduleSecond: selection.selectedDayScheduleSecond,
  numberOfArtistsToBook: selection.numberOfArtistsToBook,
})

export default connect(mapStateToProps, null)(DraftSchedules)