import React from 'react'
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
  return (
    <>
    <Router>
      <Routes>
      
         <Route exact path='/' element={<Navbar></Navbar>} >
         <Route exact path='home' element={<Home></Home>} ></Route>
         <Route exact path='trips' element={<Trips></Trips>} ></Route>
         <Route exact  path='trip' element={<Trip></Trip>} ></Route>
         <Route exact path='price' element={<Price></Price>} ></Route>
         <Route exact path='contact' element={<Contact></Contact>} ></Route>
         
         </Route>
         
      </Routes>
    </Router>

    
   
    </>

  
  );
}

export default App;
