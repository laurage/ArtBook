import React from 'react'
import './style.scss'
import { TimelineIcon, ScheduleIcon, BookArtistsIcon } from '../SvgIcons'

export const Navigation = () => (
    <div className="navigation">
        <div className="navigation-icons-position">
            <div className="navigation-icons">
                <TimelineIcon/> 
                <ScheduleIcon/> 
                <BookArtistsIcon/> 
            </div>
        </div>
        <div className="navigation-background"></div>
    </div>
)

export default Navigation