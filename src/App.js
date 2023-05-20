import React from "react";
import "./App.css";
import SmoothScroll from "smooth-scroll";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Cards from "./Components/Cards";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <Cards/>
        <Services/>
        <Footer/>
        <Routes>
          <Route path="/" element={<Navbar/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/footer" element={<footer/>}/>
        </Routes>
    </div>
  );
}

export default App;
