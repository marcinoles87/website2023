import React from 'react'
import './trips.css'
import data from '../data.json'
import {Link} from 'react-router-dom'


 function Trips() {

  const  handleOnClick = () => {
    
    window.location.replace('http://localhost:3000/trip');
    console.log('dziala')
  }
      
    
 
  
  return (
    <div className='trips-container'>
      <h1>Check out our Trip and Visit with the smile...</h1>
        <div className='trips-list'>
            <div className='trips-card'>
                {data.map( (item,index) => {
                  
                  
                 
                  
                  return(
                    <div className='trip-item' key={index}>
                      <ul>
                      <li key={index} className='trip-item-one'>
                       
                        <img src={item.im} alt={item.name} className='trip-img'></img>
                        <p className='trip-info'>{item.info}
                        <button className='trip-btn' onClick={handleOnClick}>More</button></p>
                        <Link to="/trip" className="trip-redirect"> More Info</Link>
                      </li>
                      </ul>
                      </div>
                  )
                })}
            </div>
        </div>

    </div>
  )
}

export default Trips
