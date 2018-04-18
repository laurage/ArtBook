import React from 'react'
import './style.scss'

export const InstructionBar = ({title, instructions}) => (
    <div>
        <h2>{title}</h2>
        <p>{instructions}</p>
    </div>
)

export default InstructionBar