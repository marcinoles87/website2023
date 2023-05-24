import React from 'react'
import './trips.css'
import data from '../data.json'

 function Trips(props) {

  return (
    <div className='trips-container'>
        <div className='trips-list'>
            <div className='trips-card'>
                {data.map( (item,index) => {

                  console.log(item.im)
                  return(
                    <div className='trip-item' key={index}>
                      <li key={index}>
                        <h1>{item.name}</h1>
                        <h2>{item.trip}</h2>
                        <img src={props.picture} alt={item.name}></img>
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
