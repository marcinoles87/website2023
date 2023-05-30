import React from 'react'
import './trip.css'
import data from '/web frontend/projekty React/website2023/src/data.json'

function Trip() {

  return (
    <div className='trip-container'>

      {data.map( (item , index) => {
        return(
          <div className='trip-card' key={index}>
              <img src={item.im} alt={item.tripName}></img>
              <div className='trip-info'>
              <h1>Name :{item.name}</h1>
              
              <h3>Price : {item.price}</h3>
              <p>{item.info}</p>
              </div>
              {/* <h3>price</h3>
              <h3>time</h3> */}
              
          </div>
        )
      })}

    </div>
  )

      
}

export default Trip