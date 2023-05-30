import React from 'react'
import './contact.css'
import faceLogo from '/web frontend/projekty React/website2023/src/img/faceLogo.png'
import trip from '/web frontend/projekty React/website2023/src/img/trip.jpg'
import instagramLogo from '/web frontend/projekty React/website2023/src/img/instagramLogo.jpg'

function Contact() {

  // const colorChange = [
  //   {transform : "translateY(10px)"},
    
  // ]

  // const myI = () => {
  //   const arrow = document.getElementById('arrowUp')
  //   arrow.animate(colorChange,1000 )
  // }

  // if(window.innerHeight  > 600)
  // {
  //   setInterval(myI,1000)
  //   clearInterval(myI)
  // }
  
  

  return(
  <div className='contact-wrapper' id='contact'>

  <h1>We are on </h1>
  
  
      <div className='contact-link'>
          
              <a  href='https://www.auschwitzsaltmine.com'><img src={faceLogo} alt='facebook'></img></a>
              <a href='https://www.auschwitzsaltmine.com'><img src={trip} alt='tripadvisor'></img></a>
              <a href='https://www.auschwitzsaltmine.com'><img src={instagramLogo}  alt='instagram'></img></a>
              
              
             
      </div>

      <div className='contact-arrow'>
        <i class="fa-solid fa-arrow-down" id="arrowUp"></i>
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
        <h1>Site Map</h1>
        <a href='/contact'>Home</a>
        <a href='/home'>Information</a>
        <a href='/trips'>Trip</a>
        <a href='/price'>Price</a>
        <a href='home'>Facebook</a>
        <a href='home'>Instagram</a>
        <a href='home'>TripAdvisor</a>


      </div>


      </div>

 </div>

  )

}

export default Contact