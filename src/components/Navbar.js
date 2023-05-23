import React , {useState}from 'react'
import {Link , Outlet} from 'react-router-dom'


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
        <Link to="/header" className="navbar-item"> Home</Link>
        <Link to="/trips" className="navbar-item"> Trips</Link>
        <Link to="/contact" className="navbar-item"> Contact</Link>
      </div>

      : ""

}

<Outlet />

          
    </nav>

    
    
  )
  
}

export default Navbar
