import React, { Component } from 'react';
import { Link } from 'react-router';
import Axios from 'axios';
import { GEO, CIVIC } from '../util/api'
import polls from '../data/polls.js';

export default class MyRep extends Component {
  constructor(props){
    super(props);
    // this.handleRsponse= this.handleRsponse.bind(this)
    this.renderPersonal = this.renderPersonal.bind(this);
    this.state = {
      polls: polls,
      // repName: [],
      // repAddress: [],
      // repParty: [],
      // repPhoto: [],
      myRepInfo: []

    }
  }
  handleResponse(res){
    console.log("handling response")
    console.log(res)
    // var repAddress = [],
    // repName= [],
    // repParty= [],
    // detailParse= [],
    // repPhoto= [],
    var detailParse =[],
        myRepInfo=[];
    for(var i=0;i<res.length;i++){

      // console.log("address")

      var repAddress = [res[i].address]
      // var detailParse= []
      for(var j=0;j<repAddress.length;j++){
        //seperate out the address lines here
        // console.log(repAddress)
        // console.log(`${repAddress[j][0].line2}`)
        if (`${repAddress[j][0].line2}` !== "undefined"|| undefined){
          detailParse.push(`${repAddress[j][0].line1} ${repAddress[j][0].line2} ${repAddress[j][0].city} ${repAddress[j][0].state} ${repAddress[j][0].zip}`)
        } else {
          // console.log("undefined")
          detailParse.push(`${repAddress[j][0].line1} ${repAddress[j][0].city} ${repAddress[j][0].state} ${repAddress[j][0].zip}`)
        }

      }
      // console.log(res[i].phones)
      // repName.push({name:`${res[i].name}`})
      // repParty.push({party:`${res[i].party}`})
      // repPhoto.push({photoUrl:`${res[i].photoUrl}`})
      // console.log(detailParse)
      myRepInfo.push({name: res[i].name,
                    party: res[i].party,
                    address: detailParse[i],
                    photoUrl: res[i].photoUrl,
                    phones:res[i].phones,
                    urls: res[i].urls})
    }

    this.setState({
      // repName: repName,
      // repAddress: detailParse,
      // repParty: repParty,
      // repPhoto: repPhoto,
      myRepInfo:myRepInfo})
    // debugger;
  }
  renderPersonal(){
    const infoStyle= {width:'50%', display:'inline-block'}
    const imgStyle = {maxWidth: '100px', maxHeight: '100px', display: 'inline-block', 'padding-right': '1%'}
    var civicurl=`https://www.googleapis.com/civicinfo/v2/representatives?address=${this.state.address}&key=${CIVIC}`
    console.log(civicurl)
    Axios.get(civicurl).then(response => {
      console.log("civic firing")
      console.log(response.data.officials)
      this.handleResponse(response.data.officials)

      // handleResponse(response.data.officials)
    }).catch(error=>{console.log(error);});
    return this.state.myRepInfo.map(myReps => {
      return(
        <div key={myReps.name}>
        <h1>{myReps.name}</h1>
        <div>
        <img style={imgStyle} src ={myReps.photoUrl} />
        <div className="infoStyle">
          <p>Party: {myReps.party}</p>
          <p>Address: {myReps.address}</p>
          <p>Phone: {myReps.phones}</p>
          <p>Url: {myReps.urls}</p>
        </div>
        <hr />

        </div>
        </div>
      )
    })

  }


  render(){
    // const divStyle={paddingLeft: '50px'};
    console.log("here is a state")
    // console.log(this.state)
    return(
    <div className="bodyStyle">
      <h3>Your Representatives</h3>
      {this.renderPersonal()}

    </div>
    )
  }
}
