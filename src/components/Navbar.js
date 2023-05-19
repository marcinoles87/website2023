import React , {useState}from 'react'
import {Link} from 'react-router-dom'

import './navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to="/" className="navbar-item"> Home</Link>
        <Link to="/" className="navbar-item"> Trips</Link>
        <Link to="/" className="navbar-item"> About</Link>
        <Link to="/" className="navbar-item"> Contact</Link>
      </div>
    </nav>
    
  )
}

export default Navbar
