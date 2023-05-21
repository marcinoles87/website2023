import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
         <Route exact path='/' element={<Navbar></Navbar>} ></Route>
         <Route  path='/' element={<Header></Header>} ></Route>
      </Routes>


      </Router>
    </>
  );
}

export default App;
