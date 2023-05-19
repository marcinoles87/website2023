import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
         <Route exact path='/' element={<Navbar></Navbar>} ></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
