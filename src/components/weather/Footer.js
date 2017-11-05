import React from 'react'
import { Link } from '../router'

export const Footer = () => {
  return (
    <div className='footer'>
      <Link to='/'>Home</Link>
      <Link to='/forecast'>5-Day Forecast</Link>
    </div>
  )
}
