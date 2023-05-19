import React from "react";
import "./App.css";
import SmoothScroll from "smooth-scroll";
import { Navigation } from "./Components/Nav";
import { Contact } from "./Components/contact";
import Home from "./Components/Home";
import About from "./Components/About";
import Team from "./Components/Team";
import Services from "./Components/Services";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  return (
    <div>
      <div className="row">
        <Navigation />
        <Home/>
        <About/>
        <Team/>
        <Services/>
        <Contact />
      </div>
    </div>
  );
}

export default App;
