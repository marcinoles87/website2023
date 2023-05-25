import React from 'react'
import './header.css'
import Button from './Button.js'


function Header() {
  return (
    <div className='header-container'>
        <div className='header-hero'>
          
          
           <video src='/video/front.mp4' type='video/mp4' autoPlay loop muted />
           <h1> ADVENTURE START NOW...</h1>
        </div>

    </div>
  )
}

export default Header;