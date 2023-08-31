import React, { useState } from 'react'
import './header.css'
import CountUp from 'react-countup'


function Header() {
  

  let [cnt , setCnt] = useState(false)

  const handleCountUp = () => {
    console.log(window.scrollY)
    if(window.scrollY > 1000){
      setCnt(cnt=true)
    }
  }

  window.onscroll = handleCountUp

 
  return (
    <div className='header-container'>
        <div className='header-hero'>
          
          
           {/* <video src='/video/front.mp4' type='video/mp4' autoPlay loop muted /> */}
           
           <video src='./website2023/video/frontfilm.mp4' type='video/mp4' autoPlay loop muted />
           
           
           <h1> ADVENTURE START NOW...</h1>
           <h1> ADVENTURE START NOW...</h1>
            <button className='header-btn'><a href='#us'>GET STARTED</a></button>
           
        </div>


        <div className='header-information'>
          <h1 id='us'> About #Us</h1>
          <p>Our company specializes in organizing private and group trips from Krakow to the most interesting places in the south of Poland. We have extensive expertise in the tourism industry. We have all required licenses and certificates. Our drivers are English-speaking. We offer airport transfer and intercity transport. We invite to cooperation individual customers as well as companies, hotels, travel agencies.</p>
        </div>

        <div className='header-plus'>
          <h2>
            <strong>What We offer ...</strong>
          </h2>

          <div className='header-plus-box'>
              <div className='header-plus-row'>
                  <div className='header-plus-item'>
                  <i className="fa-solid fa-user"></i>
                    <h3>Trip drive</h3>
                    {cnt ? <CountUp  className='countUp'
                start={0} 
                end={243}
                duration={3.5}
                separator=' , '>

            </CountUp>  : ''}
                  </div>

                  <div className='header-plus-item'>
                  <i className="fa-regular fa-heart"></i>
                    <h3>hour with client</h3>
                    {cnt ? <CountUp className='countUp'
                start={0} 
                end={2430}
                duration={3.5}
                separator=' , '>

            </CountUp>  : ''}
                    
                  </div>

                  <div className='header-plus-item'>
                  <i className="fa-regular fa-handshake"></i>
                    <h3>All diffrent place</h3>
                    {cnt ? <CountUp className='countUp'
                start={0} 
                end={24}
                duration={3.5}
                separator=' , '>

            </CountUp>  : ''}
                  
                  </div>

                  <div className='header-plus-item'>
                  <i className="fa-regular fa-hand-peace"></i>
                    <h3>Friendly</h3>
                    We are a friendly company, each of our clients is treated as a priority. We value the comfort and friendly attitude of our customers.
                  </div>

                  <div className='header-plus-item'>
                  <i className="fa-solid fa-road"></i>
                    <h3>Comfort</h3>
                    Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków 
                  </div>

                  <div className='header-plus-item'>
                  <i className="fa-solid fa-user"> + 4</i>
                    <h3>Space</h3>
                    Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków 
                  </div>
              </div>
          </div>
        </div>

        <div className='header-countUp'>
        
        </div>

        <div className='header-information2'>
          <div className='header-information2-back'>
          <h2> Important Information</h2>
          <h3> Want some information click to contact</h3>
          </div>
          <p>Are you looking for an interesting place to spend a long weekend or a longer vacation? Many people decide to stay in Krakow. The opportunity to enjoy the charms of the city's vibrant cultural and tourist life combined with the close proximity of many interesting natural attractions make your stay in Krakow a must! What tourist attractions await us in Krakow and Poland? Auschwitz - This place became a symbol of the Holocaust and Nazi crimes against Poles, Roma and Jews. It takes about 3 hours to explore. Strong nerves are also needed to see what atrocities took place in Auschwitz. Wieliczka- The reason why it is worth visiting the Wieliczka Mine is best evidenced by the fact that it was one of the first UNESCO World Cultural and Natural Heritage listed. This place combines centuries-old Polish culture as well as modernity in one. During the journey through the amazing mine rooms we will have the opportunity to discover the history, as well as see many amazing rooms and tunnels and chambers adapted for tourists.</p>
        </div>
    </div>

    
  )
}

export default Header;