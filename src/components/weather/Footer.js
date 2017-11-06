import React from 'react'
import { Link } from '../router'

export const Footer = () => {
  return (
    <div className='footer'>
      <Link to='/'>HOME</Link>
      <Link to='/maps'>MAPS</Link>
    </div>
  )
}
