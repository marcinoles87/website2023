import React from 'react'
import './trips.css'
import data from '../data.json'

 function Trips() {

  
  return (
    <div className='trips-container'>
        <div className='trips-list'>
            <div className='trips-card'>
                {data.map( (item,index) => {

                  const tripName = item.tripName.toUpperCase()
                  console.log(item.im)
                  return(
                    <div className='trip-item' key={index}>
                      <li key={index} className='trip-item-one'>
                        <h2>{tripName}</h2>
                        <img src={item.im} alt={item.name} className='trip-img'></img>
                        <button className='trip-btn'>More</button>
                      </li>
                      </div>
                  )
                })}
            </div>
        </div>

    </div>
  )
}

export default Trips
