import React, { Component } from 'react';
import Axios from 'axios';
import { GEO, CIVIC } from '../util/api'

{/*import { findGeo } from '../util/geolocator.js';
 import field should be in geo locator area*/}

export default class Landing extends Component {
  constructor(){
  super();
  this.geoSuccess = this.geoSuccess.bind(this);
  this.geoError = this.geoError.bind(this);
  this.reverseLookUp= this.reverseLookUp.bind(this);
  this.state ={
    polls: null,
    lat: "",
    long: "",
    address: ""
    }

  };

  findGeo = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError)
    } else {
      alert("Looks like your browser doesn't support this functionality. Please enter it in the search field.")
    }
  };

  geoSuccess(position){
    this.setState({lat: position.coords.latitude, long: position.coords.longitude})
    //alert(`${this.state.lat} ${this.state.long}`);
  };
  geoError(e){
    console.log(e)
    alert("Sorry we couldn't get your location")
  };

  reverseLookUp(){
   var url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.lat},${this.state.long}&key=${GEO}`
   console.log(url)
   Axios.get(url)
    .then(response => {
      var address = response.data.results[0].formatted_address
      var split = address.split(",")
      var stateandzip= split[2].split(" ")
      var line1 = split[0].replace(/\s+/g, '%20')
      var city= split[1].replace(/\s+/g, '')
      var state = stateandzip[1]
      var zip= stateandzip[2]
      this.setState({address: `${line1}%20${city}%20${state}`})
      console.log(this.state.address)
      console.log(`${GEO} ${CIVIC}`)
    })
    .then(()=>{
      var civicurl=`https://www.googleapis.com/civicinfo/v2/representatives?address=${this.state.address}&key=${CIVIC}`
      Axios.get(civicurl)
        .then(response => {
          console.log("civic firing")
          console.log(response)
        })
    })
    .catch(error=>{console.log(error);});
  }


  componentWillMount(){
    if (this.state.lat !== ""){
      this.reverseLookUp()
    }
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
        <button onClick={()=>{this.reverseLookUp()}}>+</button>
        <button onClick={()=>{this.reverseLookUp()}}>-</button>
      </div>
    )
  }
}


