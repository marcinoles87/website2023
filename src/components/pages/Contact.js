import React from 'react'
import './contact.css'
import faceLogo from '/web frontend/projekty React/website2023/src/img/faceLogo.png'
import trip from '/web frontend/projekty React/website2023/src/img/trip.jpg'
import instagramLogo from '/web frontend/projekty React/website2023/src/img/instagramLogo.jpg'

function Contact() {
  return(
  <div className='contact-wrapper' id='contact'>

  <h1>We are on </h1>
  
  
      <div className='contact-link'>
          
              <a  href='https://www.auschwitzsaltmine.com'><img src={faceLogo} alt='facebook'></img></a>
              <a href='https://www.auschwitzsaltmine.com'><img src={trip} alt='tripadvisor'></img></a>
              <a href='https://www.auschwitzsaltmine.com'><img src={instagramLogo}  alt='instagram'></img></a>
              
             
      </div>

      <div className='contact-footer'>
      <div className='contact-message'>
        <h1>Have a question :</h1>
        <input type='text' placeholder='name' ></input>
        <input type='email'placeholder='email'></input>
        <input type='message'placeholder='destination trip'></input>
        <input type='date' placeholder='choose date'></input>
        <textarea type='text' placeholder='send message'></textarea>
        <button>Send</button>

      </div>

      <div className='contact-map'>
        <a href='#'>Home</a>
        <a href='#'>Home</a>
        <a href='#'>Home</a>
        <a href='#'>Home</a>
        <a href='#'>Home</a>
        <a href='#'>Home</a>
        <a href='#'>Home</a>


      </div>


      </div>

 </div>

  )

}

export default Contact