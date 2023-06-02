import React from 'react'
import './trips.css'
import data from '../data.json'
import {Link} from 'react-router-dom'


 function Trips() {

  // const  handleOnClick = () => {
    
  //   window.location.replace('http://localhost:3000/trip');
  //   console.log('dziala')
  // }
      
    
 
  
  return (
    <div className='trips-container'>
     

      <div className='trip-information'>
        <h1>More about our trips</h1>
        <p>Are you looking for an interesting place to spend a long weekend or a longer vacation? Many people decide to stay in Krakow. The opportunity to enjoy the charms of the city's vibrant cultural and tourist life combined with the close proximity of many interesting natural attractions make your stay in Krakow a must! What tourist attractions await us in Krakow and Poland? Auschwitz - This place became a symbol of the Holocaust and Nazi crimes against Poles, Roma and Jews. It takes about 3 hours to explore. Strong nerves are also needed to see what atrocities took place in Auschwitz. Wieliczka- The reason why it is worth visiting the Wieliczka Mine is best evidenced by the fact that it was one of the first UNESCO World Cultural and Natural Heritage listed. This place combines centuries-old Polish culture as well as modernity in one. During the journey through the amazing mine rooms we will have the opportunity to discover the history, as well as see many amazing rooms and tunnels and chambers adapted for tourists.</p>
      </div>

      <h1>Check out our Trip and Visit with the smile...</h1>
        <div className='trips-list'>
            <div className='trips-card'>
                {data.map( (item,index) => {
                  
                  
                 
                  
                  return(
                    <div className='trip-item' key={index}>
                      <ul>
                      <li key={index} className='trip-item-one'>
                       
                        <img src={item.im} alt={item.name} className='trip-img'></img>
                        <p className='trip-info'></p>
                        {/* <button className='trip-btn' onClick={handleOnClick}>More</button></p> */}
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
