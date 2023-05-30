import React from 'react'
import './trip.css'
import data from '/web frontend/projekty React/website2023/src/data.json'

function Trip() {

  return (
    <div className='trip-container'>
      
      {data.map( (item , index) => {
        return(
          <div className='trip-card'>
              <h1>{item.name}</h1>
              <p>Description</p>
              <img src={item.im} alt={item.tripName}></img>
              <h3>price</h3>
              <h3>time</h3>
          </div>
        )
      })}

    </div>
  )

      
}

export default Trip