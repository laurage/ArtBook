import React from 'react'
import '../../assets/styles/main.scss'
import './style.scss'

export const Button = ({children}) => (
  <button className="btn">
    {children}
  </button>
)
