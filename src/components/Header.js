import React from 'react'
import './header.css'
import Button from './Button.js'

import heroImg from './img/hero.jpg'

function Header() {
  return (
    <div className='header-container'>
        <div className='header-hero'>
           <button>Visit</button>
           <button>Choose Trip and Relax</button>
          
        </div>

    </div>
  )
}

export default Header;