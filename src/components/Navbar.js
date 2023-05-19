import React , {useState}from 'react'
import {Link} from 'react-router-dom'

import './navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to="/" className="navbar-logo"> Try</Link>
      </div>
    </nav>
    
  )
}

export default Navbar
