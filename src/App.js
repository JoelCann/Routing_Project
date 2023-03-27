import React from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Aboutpage from './Routes/about.js'
import Homepage from './Routes/home.js'
import Contactpage from './Routes/contact.js'
// import audi1 from './audi1.jpg';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about" element={<Aboutpage />} />
          <Route exact path="/contact" element={<Contactpage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
