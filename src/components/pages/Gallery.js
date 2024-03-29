import React from 'react'
import im1 from '/web frontend/projekty React/website2023/src/img/cracow.jpg'
import im2 from '/web frontend/projekty React/website2023/src/img/hero.jpg'
import im3 from '/web frontend/projekty React/website2023/src/img/vip1.jpg'
import im4 from '/web frontend/projekty React/website2023/src/img/vip2.jpg'
import i4 from '/web frontend/projekty React/website2023/src/img/vip4.jpg'
import im7 from '/web frontend/projekty React/website2023/src/img/vip7.jpg'
import im8 from '/web frontend/projekty React/website2023/src/img/vip8.jpg'
import im6 from '/web frontend/projekty React/website2023/src/img/vip6.jpg'
import im5 from '/web frontend/projekty React/website2023/src/img/mePhoto.jpg'

import './gallery.css'

function Gallery() {

        const arrayGal = [im1 , im2 , im3 , im4 , i4 , im5 , im6 , im7 , im8]
        console.log(arrayGal)
        
               const lp =  Math.floor(Math.random()*6)
        
  return (
    <div className='gallery-container'>
      <div className='gallery-row'>
              <img src={im1} alt='cracow'></img>
             
      </div>
      <div className='gallery-column'>
              <img src={im3} alt='cracow'></img>
              <img src={im2} alt='cracow'></img>
             
      </div>

      <div className='gallery-column'>
              <img src={i4} alt='cracow'></img>
              <img src={im4} alt='cracow'></img>
             
      </div>

      <div className='gallery-row'>
              <img src={im5} alt='cracow'></img>
             
      </div>
    
    
        {arrayGal.map( (item , index) => {


                return(
                        
                         <img src={item} alt='cracow' key={index}></img>
                        
                )

        })}
    
    </div>
  )
}

export default Gallery