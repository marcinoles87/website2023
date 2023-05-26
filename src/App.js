import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
// import Header from './components/Header';
import Trips from './components/Trips';
import Contact from './components/Contact';

import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <>
    <Router>
      <Routes>
      
         <Route exact path='/' element={<Navbar></Navbar>} >
         <Route  path='home' element={<Home></Home>} ></Route>
         <Route  path='trips' element={<Trips></Trips>} ></Route>
         <Route  path='contact' element={<Contact></Contact>} ></Route>
         </Route>
         
      </Routes>
    </Router>

    
   
    </>

  
  );
}

export default App;
