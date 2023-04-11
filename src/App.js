import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Views/Home'
import About from './Views/About';
import TopSearch from './Views/TopSearch';


function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/topSearch" element={<TopSearch/>} />
          <Route path="/about" element={<About/>} />

        </Routes>

      <Footer />
      </Router>

    </div>
  );
}

export default App;
