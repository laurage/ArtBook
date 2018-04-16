import React from 'react'
import { Link } from 'react-router-dom';
import './style.scss'
import routesNames from '../../assets/data/routesNames'

import { TimelineIcon, ScheduleIcon, BookArtistsIcon } from '../SvgIcons'

export const Navigation = () => (
    <div className="navigation">
        <div className="navigation-icons-position">
            <div className="navigation-icons">
                <Link to={routesNames.draftTimeline}>
                    <TimelineIcon/> 
                </Link>
                <Link to={routesNames.draftSchedules}>
                    <ScheduleIcon/> 
                </Link>
                <Link to={routesNames.bookArtists}>
                    <BookArtistsIcon/>
                </Link>
            </div>
        </div>
        <div className="navigation-background"></div>
    </div>
)

export default Navigation