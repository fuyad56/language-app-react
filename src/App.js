import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import Details from './Components/Details/Details';
import Error from './Components/Error/Error';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services/:id" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
