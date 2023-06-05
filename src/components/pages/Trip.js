import React from 'react'
import './trip.css'
import data from '/web frontend/projekty React/website2023/src/data.json'

function Trip() {

  const handleOnClick = (e) => {
    console.log('dziala')
    const img = document.querySelector('img');
    console.log(e.target.alt)
  }

  return (
    <div className='trip-container'>

      {data.map( (item , index) => {
        return(
          <div className='trip-card' key={index}>
            <div className='trip-galllery'>
            
              <img src={item.im} alt={item.tripName} onClick={handleOnClick}></img>
              <img src={item.im} alt={item.tripName}></img>

              </div>

              <div className='trip-info'>
              <h1>{item.name}</h1>
              <p>{item.info}</p>
              <h2>Price : {item.price}</h2>
              
              <h2>Time : {item.time}</h2>
              <h2>Reating : {item.rating} <i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i></h2>
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