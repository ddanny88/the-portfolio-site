import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import './App.css';
import Hero from './components/Hero/Hero';
import Tortgua from './components/Tortuga/Tortuga';
import FNO from './components/FNO/FNO';
import Techs from './components/Techs/Techs';
import Footer from './components/Footer/Footer';
import TD from './components/TortugaDescription/TD';
import About from "./components/About/about";

class App extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <Nav />
        <Hero />
        <About />
        <TD />
        <Tortgua />
        <FNO />
        <Techs />
        <Footer />
      </div>
    );
  }
}

export default App;
