import React from 'react'
import { Link } from 'react-router-dom';

import '../../assets/styles/main.scss'
import './style.scss'

export const Button = ({children}) => (
  <Link to='/draftSchedules'>
    <button className="btn">
      {children}
    </button>
  </Link>
)
