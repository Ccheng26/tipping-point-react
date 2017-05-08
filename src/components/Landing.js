import React, { Component } from 'react';
import './Landing.css';
// import {React_Boostrap_Carousel} from 'react-boostrap-carousel';
import { Carousel } from 'react-bootstrap'
// import '../css/bootstrap.min.css';
// import '../css/react-boostrap-carousel.css';
{/*import { findGeo } from '../util/geolocator.js';
 import field should be in geo locator area*/}

export default class Landing extends Component {
  render(){

    const carouselInstance = (
  <Carousel>
    <Carousel.Item>
      <img className="img-responsive" width={'100%'} height={300} alt="900x500" src="http://1.bp.blogspot.com/-BUrT0CP-6nQ/U1prUuv6VjI/AAAAAAAAFbY/a6PUNgNhSWM/s1600/1500x500-New-York-Skyline-Twitter-Header0017.jpg"/>
      <Carousel.Caption>
        <h3>In winner take all elections..</h3>
        <p>One has to ask</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="img-responsive" width={'100%'} height={300} alt="900x500" src="http://1.bp.blogspot.com/-jBZKbiHI_2U/U1pszgzFAbI/AAAAAAAAFcI/8xrxWuBse9o/s1600/1500x500-New-York-Skyline-Twitter-Header0024.jpg"/>
      <Carousel.Caption>
        <h3>Does my vote still count?</h3>
        <p>How can I make a difference?</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="img-responsive" width={'100%'} height={300} alt="900x500" src="http://mooxidesign.com/wp-content/uploads/2014/04/New-york-1500x500.jpg"/>
      <Carousel.Caption>
        <h3>Get Out There</h3>
        <p><a className="btn btn-large btn-primary" href="/localrepresentatives">Find a tipping point</a></p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

    return (
      <div>
      {carouselInstance}
      </div>
    )
  }
}



