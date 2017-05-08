import React, { Component } from 'react';
import Navbar from './Navbar';
import Axios from 'axios';
import { GEO, CIVIC } from '../util/api'

export default class App extends Component {
  constructor(props){
  super(props);
  this.findGeo= this.findGeo.bind(this)
  this.geoSuccess = this.geoSuccess.bind(this);
  this.geoError = this.geoError.bind(this);
  this.reverseLookUp= this.reverseLookUp.bind(this);
  this.state ={
    polls: null,
    lat: "",
    long: "",
    address: "",
    repinfo: null
    }

  };

  findGeo = () => {
    if ("geolocation" in navigator) {
      console.log("geolog")
      navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError)
    } else {
      alert("Looks like your browser doesn't support this functionality. Please enter it in the search field.")
    }
  };

  geoSuccess(position){

    this.setState({lat: position.coords.latitude, long: position.coords.longitude})
    // alert(`${this.state.lat} ${this.state.long}`);
    this.reverseLookUp();
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
      // console.log(this.state)
      // console.log(this.state.address)
      // console.log(`${GEO} ${CIVIC}`)
    })
    // .then(()=>{
    //   var civicurl=`https://www.googleapis.com/civicinfo/v2/representatives?address=${this.state.address}&key=${CIVIC}`
    //   if(`${this.state.address}` !== "undefined"){
    //     Axios.get(civicurl)
    //     .then(response => {
    //       console.log("civic firing")
    //       console.log(response)
    //     })
    //   }

    // })
    .catch(error=>{console.log(error);});
  }


  componentWillMount(){
    if (this.state.lat !== ""){
      this.reverseLookUp()
    } else{
      this.findGeo()
    }
  }

  componentDidMount(){

  }
  componentDidUpdate(){

  }
  render(props,index){
      var children = React.Children.map(this.props.children, function (child) {
    return React.cloneElement(child, {
      // location: this.props.children
    })
  })

  return <div className="App">
  <Navbar key={index}/>
  {children}
  </div>
}
}


//     return(
//       <div
//     className="App"

//     >
//       <Navbar key={index}/>
//       {this.props.children}
//       { /*console.log(this.props.children) */}
//     </div>
//       )

//   }
// }
