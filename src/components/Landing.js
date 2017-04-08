import React, { Component } from 'react';
{/*import { findGeo } from '../util/geolocator.js';
 import field should be in geo locator area*/}

export default class Landing extends Component {
  constructor(){
  super();
  this.geoSuccess = this.geoSuccess.bind(this)
  this.geoError = this.geoError.bind(this)
  this.state ={
    polls: null,
    lat: [],
    long: []
    }

  };

  findGeo = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError);
    } else {
      alert("Looks like your browser doesn't support this functionality. Please enter it in the search field.")
    }
  };

  geoSuccess(position){
    this.setState({lat: position.coords.latitude, long: position.coords.longitude})
    //alert(this.state.lat);
  };
  geoError(e){
    console.log(e)
    alert("Sorry we couldn't get your location")
  };

  componentWillMount(){

  }

  componentDidMount(){

  }
  componentDidUpdate(){

  }
  render(){
    return (
      <div>
        <h1 className="flow-text">Tipping Point</h1>
        <br onClick={this.findGeo()} />

      </div>
    )
  }
}


