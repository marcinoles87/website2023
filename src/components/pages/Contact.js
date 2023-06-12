import React from 'react'
import './contact.css'
import faceLogo from '/web frontend/projekty React/website2023/src/img/faceLogo.png'
import trip from '/web frontend/projekty React/website2023/src/img/trip.jpg'
import instagramLogo from '/web frontend/projekty React/website2023/src/img/instagramLogo.jpg'

function Contact() {

  const handleSubmit = (e) =>{
    e.preventDefault()

    const name = document.querySelector('.name').value;
    const email = document.querySelector('.email').value;
    const trip = document.querySelector('.trip').value;
    const date = document.querySelector('.date').value;
    
    if(name.length < 1){
     alert('name to short')
    }

    alert(`your actual message : name ${name} email:  ${email} ${trip}`)
  
  }

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