import React from 'react'
import im1 from '/web frontend/projekty React/website2023/src/img/cracow.jpg'
import im2 from '/web frontend/projekty React/website2023/src/img/hero.jpg'
import im3 from '/web frontend/projekty React/website2023/src/img/vip1.jpg'
import im4 from '/web frontend/projekty React/website2023/src/img/vip2.jpg'
import im5 from '/web frontend/projekty React/website2023/src/img/mePhoto.jpg'

import './gallery.css'

function Gallery() {
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
              <img src={im2} alt='cracow'></img>
              <img src={im4} alt='cracow'></img>
             
      </div>

      <div className='gallery-row'>
              <img src={im5} alt='cracow'></img>
             
      </div>
    
    <img src={im1} alt='cracow'></img>
    <img src={im1} alt='cracow'></img>
    <img src={im1} alt='cracow'></img>
    <img src={im1} alt='cracow'></img>
    <img src={im1} alt='cracow'></img>
    
    </div>
  )
}

export default Gallery