import React from 'react'
import './header.css'

import heroImg from './img/hero-img.jpg'

function Header() {
  return (
    <div className='header-container'>
        <div className='header-hero'>
          <img className='header-img' src={heroImg}></img>
        </div>

    </div>
  )
}

export default Header;