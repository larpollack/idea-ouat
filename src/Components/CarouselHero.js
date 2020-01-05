import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import carousel1 from '../images/carousel-1.jpg';
import carousel2 from '../images/carousel-2.jpg';
import carousel3 from '../images/carousel-3.jpg';

export default class CarouselHero extends Component {
  render(){
    return(
      <div className="carousel">
        <div className="carousel-wrapper">
        <div className="carousel-copy">
          <p className="carousel-title">Screening:</p>
          <p className="carousel-title">DVF Secret Agent Part 2</p>
          <p className="carousel-date">October 15, 2017</p>
          <p className='carousel-body'>Join us for a private screening of DVF Secret Agent Part 2 <br/> with our special guest, director Peter Lindberg.</p>
        </div>
        </div>
      <Carousel
      showArrows={false}
      showIndicators={true}
      infiniteLoop={true}
      autoPlay={true}
      transitionTime={1000}
      interval={5000}
      swipeable={true}
      emulateTouch={true}
      centerMode={false}
      showThumbs={false}
      showStatus={false}
      useKeyboardArrows={true}
    >

    <div className='carousel1'>
      <img id='carousel1' src={carousel1} alt='carousel1'></img>
    </div>

    <div className='carousel2'>
      <img id='carousel2' src={carousel2} alt='carousel2'></img>
    </div>

    <div className='carousel3'>
      <img id='carousel3' src={carousel3} alt='carousel3'></img>
    </div>
    </Carousel>
  </div>
    )
  }
}