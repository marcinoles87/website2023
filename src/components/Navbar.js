import React , {useState}from 'react'
import {Link , Outlet} from 'react-router-dom'


import './navbar.css'
import Header from './Header'



function Navbar() {
  let [click , setClick] = useState(true)
  let [menuOn , setMenu] = useState(true)

  // const wnd = document.querySelector('window')
  
  

  const handleOnChange =  () => {
    
    if(window.innerWidth < 400){
      setClick(!click)
    }else(
      setClick(true)
    )
  }

 window.onresize = handleOnChange

  const handleClick = () =>  setClick(!click)

  console.log(click)

  
  return (
    <nav className='navbar'>

      <div className='navbar-logo'>
        <i className='fab fa-typo3'/> 
        <p> Viptour2023</p>
      </div>

      <div className='navbar-menu' onClick={handleClick}>
        <i className={click ? 'none' : 'fas fa-bars'}/>
      </div>

      {click ? 
      <div className='navbar-container'>
        
        <Link to="/home" className="navbar-item"> Home</Link>
        <Link to="/trips" className="navbar-item"> Trips</Link>
        <Link to="/price" className="navbar-item"> Price</Link>
        <Link to="/contact" className="navbar-item"> Contact</Link>
        <Link to="/gallery" className="navbar-item"> Gallery</Link>
        
        
      </div>

      : ""

}

<Outlet />



         
    </nav>

    

   
    
  )
  
}

export default Navbar
