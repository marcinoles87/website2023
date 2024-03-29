import React from 'react'
import './contact.css'
import faceLogo from '/web frontend/projekty React/website2023/src/img/faceLogo.png'
import trip from '/web frontend/projekty React/website2023/src/img/trip.jpg'
import instagramLogo from '/web frontend/projekty React/website2023/src/img/instagramLogo.jpg'

function Contact() {

  const handleSubmit = (e) =>{
    e.preventDefault()

    const name = document.querySelector('.name').value.toUpperCase();
    const email = document.querySelector('.email').value.toUpperCase();
    const trip = document.querySelector('.trip').value.toUpperCase();
    const date = document.querySelector('.date').value.toUpperCase();
    
    if(name.length < 2){
     alert('name to short')
    } alert(`your actual message : name: ${name} email:  ${email} , trip : ${trip} , date: ${date}`)

    window.open('mailto:viptourcracow@com')
  
  }


  return(
  <div className='contact-wrapper' id='contact'>

  <h1>We are on </h1>
  
  
      <div className='contact-link'>
          
              <a  href='https://www.auschwitzsaltmine.com'><img src={faceLogo} alt='facebook'></img></a>
              <a href='https://www.auschwitzsaltmine.com'><img src={trip} alt='tripadvisor'></img></a>
              <a href='https://www.auschwitzsaltmine.com'><img src={instagramLogo}  alt='instagram'></img></a>
              
              
             
      </div>

      <div className='contact-arrow'>
        <i className="fa-solid fa-arrow-down" id="arrowUp"></i>
        </div>
      

      <div className='contact-footer'> 
      
      <form type='submit'>
          <div className='contact-message'>
          
            <h1>Have a question :</h1>
            <input type='text' placeholder='name' className='name' ></input>
            <input type='email'placeholder='email' className='email'></input>
            <input type='text'placeholder='destination trip' className='trip'></input>
            <input type='date' placeholder='choose date' className='date'></input>
            <textarea type='text' placeholder='send message' className='message'></textarea>
            <button onClick={handleSubmit}>Send</button>

          </div>

        </form>

      <div className='contact-map'>
        <h1>Site Map</h1>
        <a href='/home'>Home</a>
        <a href='/home/#info'>Information</a>
        <a href='/trips'>Trip</a>
        <a href='/price'>Price</a>
        <a href='https://www.facebook.com/people/Viptourcracow-CracowAuchswitzWieliczka-Salt-Mine/100041922716636/'>Facebook</a>
        <a href='https://www.auschwitzsaltmine.com'>Instagram</a>
        <a href='https://www.tripadvisor.com/Attraction_Review-g274772-d7734909-Reviews-VIP_TOUR_CRACOW-Krakow_Lesser_Poland_Province_Southern_Poland.html'>TripAdvisor</a>


      </div>


      </div>

 </div>

  )

}

export default Contact