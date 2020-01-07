import React, {Component} from 'react';
import Navbar from "./Components/Navbar";
import CarouselHero from './Components/CarouselHero';
import MainGrid from './Components/MainGrid';
import Footer from './Components/Footer'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
      <Navbar />
      <CarouselHero />
      <MainGrid/>
      <Footer />
      </div>
    );
  }
}

export default App;
