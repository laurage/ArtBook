import React from 'react'
import { Link } from 'react-router-dom';

import '../../assets/styles/main.scss'
import './style.scss'

export const Button = ({children, linkTo = ''}) => (
  <Link to={linkTo}>
    <button className="btn">
      {children}
    </button>
  </Link>
)
