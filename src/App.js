import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
// import Header from './components/Header';
import Trips from './components/Trips';
import Contact from './components/pages/Contact';
import Trip from './components/pages/Trip';
import Price from './components/pages/Price';

import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {

  const [btnClick , handlebtnClick] = useState(false)
  const [showImg , setShowImg] = useState(false);

 
  return (
    <>
    <Router>
      <Routes>
    
         <Route exact path='*' element={<Navbar></Navbar>} >

            <Route exact  path='home' element={<Home></Home>} ></Route>
            <Route  path='trips' element={<Trips></Trips>} ></Route>
            <Route   path='trip' element={<Trip showImg={showImg} setShowImg={setShowImg}></Trip>} ></Route>
            <Route  path='price' element={<Price handlebtnClick={handlebtnClick} btnClick={btnClick}></Price>} ></Route>
            <Route  path='contact' element={<Contact></Contact>} ></Route>
         </Route>
        
         
      </Routes>
    </Router>

    
   
    </>

  
  );
}

export default App;
