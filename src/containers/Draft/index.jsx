import React from 'react'
import { connect } from 'react-redux'
import './style.scss'

import { Calendar } from '../../components/Calendar'
import { Button } from '../../components/Button'
import SchedulesPopUp from '../../components/SchedulesPopUp'
import Navigation from '../../components/Navigation'
import InstructionBar from '../../components/InstructionBar'

import routesNames from '../../assets/data/routesNames'

export const Draft = ({ data, selectedDayScheduleSecond, numberOfArtistsToBook, location }) => (
  <div className="">
    <Navigation pathname={location.pathname}/>
    <div className="box-container box-container--grey">
      <InstructionBar title={data && data.title} instructions={data && data.instructions}/>
    </div>
    <div className="calendar__container box-container box-container--neutral">
      <Calendar mode={location.pathname === routesNames.draftTimeline ? "draftTimeline" : "draftSchedules"}/>
      { selectedDayScheduleSecond &&
        (<div className="box-container">
          <SchedulesPopUp/>
          </div>)
      }
    </div>
    <div className="draft__button box-container box-container--grey">
        <Button linkTo={data && data.button && data.button.linkTo}>{data && data.button && data.button.title}</Button>
    </div>
  </div>
)

const mapStateToProps = ({selection}) => ({
  selectedDayScheduleSecond: selection.selectedDayScheduleSecond,
  numberOfArtistsToBook: selection.numberOfArtistsToBook,
})

export default connect(mapStateToProps, null)(Draft)