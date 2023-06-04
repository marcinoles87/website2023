import React from 'react'
import './header.css'



function Header() {
  return (
    <div className='header-container'>
        <div className='header-hero'>
          
           
           {/* <video src='/video/front.mp4' type='video/mp4' autoPlay loop muted /> */}
           <video src='/video/frontfilm.mp4' type='video/mp4' autoPlay loop muted />
           
           
           <h1> ADVENTURE START NOW...</h1>
           <h1> ADVENTURE START NOW...</h1>
            <button className='header-btn'>GET STARTED</button>
           
        </div>


        <div className='header-information'>
          <h1> About #Us</h1>
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
                    <h3>Atraction</h3>
                    Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków 
                  </div>

                  <div className='header-plus-item'>
                  <i class="fa-regular fa-heart"></i>
                    <h3>Atraction</h3>
                    Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków 
                  </div>

                  <div className='header-plus-item'>
                  <i class="fa-regular fa-handshake"></i>
                    <h3>Atraction</h3>
                    Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków 
                  </div>

                  <div className='header-plus-item'>
                  <i class="fa-regular fa-hand-peace"></i>
                    <h3>Atraction</h3>
                    Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków 
                  </div>

                  <div className='header-plus-item'>
                  <i class="fa-solid fa-road"></i>
                    <h3>Atraction</h3>
                    Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków 
                  </div>

                  <div className='header-plus-item'>
                  <i className="fa-solid fa-user"> + 4</i>
                    <h3>Atraction</h3>
                    Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków 
                  </div>
              </div>
          </div>
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