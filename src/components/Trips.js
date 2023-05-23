import React from 'react'
import './trips.css'
import data from '../data.json'

 function Trips() {
  return (
    <div className='trips-container'>
        <div className='trips-list'>
            <div className='trips-card'>
                {data.map( (item,index) => {
                  return(
                    <div className='trip-item'>
                      <li key={index}>
                        <h1>{item.name}</h1>
                        <h2>{item.trip}</h2>
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
