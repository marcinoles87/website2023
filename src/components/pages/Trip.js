import React from 'react'
import './trip.css'
import data from '/web frontend/projekty React/website2023/src/data.json'

function Trip( {showImg , setShowImg}) {

  let index = Math.random()*3

  const handleOnClick = (e) => {
    const targetIndex = e.target
    const imgs = targetIndex.src
    console.log(imgs)

    

  

     
    // mymodal.classList.add('myModal')
    // mymodal.classList.toggle('myModal')
   
    // const result = data.filter( (item) => item.tripName.includes(targetIndex))
    // const imgElement = result[0]
    // console.log(imgElement)
   
    
  }

  return (
    <div className='trip-container'>

      {data.map( (item , index) => {
        return(
          <div className='trip-card' key={index}>
            <div className='trip-galllery'>
            
              <img index={index} key={index} className={`imgStyle ${showImg ? "show" : " " }`} src={item.im} alt={item.tripName} onClick={ () => setShowImg(!showImg)}></img>
              <img className='imgStyle' src={item.im} alt={item.tripName}onClick={handleOnClick}></img>

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