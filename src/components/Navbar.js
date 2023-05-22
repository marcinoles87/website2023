import React , {useState}from 'react'
import {Link} from 'react-router-dom'

import './navbar.css'

function Navbar() {
  const [click , setClick] = useState(false)

  const handleClick = () =>  setClick(!click)
  
  return (
    <nav className='navbar'>

      <div className='navbar-logo'>
        <i className='fab fa-typo3'/>
      </div>

      <div className='navbar-menu' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
      </div>

      {click ? 
      <div className='navbar-container'>
        <Link to="/" className="navbar-item"> Home</Link>
        <Link to="/Header.js" className="navbar-item"> Trips</Link>
        <Link to="/" className="navbar-item"> About</Link>
        <Link to="/" className="navbar-item"> Contact</Link>
      </div>

      : ""

}
    </nav>
    
  )
}

export default Navbar
