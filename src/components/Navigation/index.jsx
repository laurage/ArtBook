import React from 'react'
import { Link } from 'react-router-dom';
import './style.scss'
import routesNames from '../../assets/data/routesNames'

import { TimelineIcon, ScheduleIcon, BookArtistsIcon } from '../SvgIcons'

export const Navigation = ({pathname}) => (
    <div className="navigation">
        <div className="navigation__icons-position">
            <div className="navigation__icons">
                <div className="navigation__icons-item--completed">
                    <Link to={routesNames.draftTimeline}>
                        <TimelineIcon/> 
                    </Link>
                </div>
                <div className={`${
                    (pathname === routesNames.draftSchedules
                        || pathname === routesNames.bookArtists
                     ) ? "navigation__icons-item--completed" : "" }`}>
                    <Link to={routesNames.draftSchedules}>
                        <ScheduleIcon/> 
                    </Link>
                </div>
                <div className={`${pathname === routesNames.bookArtists ? "navigation__icons-item--completed" : "" }`}>
                    <Link to={routesNames.bookArtists}>
                        <BookArtistsIcon/>
                    </Link>
                </div>
            </div>
        </div>
        <div className="navigation__background"></div>
    </div>
)

export default Navigation