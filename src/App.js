import React from 'react';
import './App.css';
import Header from './Header/Header';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;
