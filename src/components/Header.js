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
          <p>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker</p>
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
                    Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków 
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
          <p>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker</p>
        </div>
    </div>

    
  )
}

export default Header;