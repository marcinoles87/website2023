import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Trips from './components/Trips';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import data from './data.json'

function App() {
  return (
    <>
    <Router>
      <Routes>
      
         <Route exact path='/' element={<Navbar></Navbar>} >
         <Route  path='header' element={<Header></Header>} ></Route>
         <Route  path='trips' element={<Trips></Trips>} ></Route>
         <Route  path='contact' element={<Header></Header>} ></Route>
         </Route>
         
      </Routes>
    </Router>

    <video src='video/front' type='video/mp4' autoPlay muted></video>
   
    </>

  
  );
}

export default App;
