import React, { Component } from 'react';
import { Link } from 'react-router';
import polls from '../data/polls.js';

export default class LocalRep extends Component {
  constructor(){
    super();
    this.state = {
      polls: polls
    }
  }
  renderLocal(){
    const imgStyle = {maxWidth: '400px', maxHeight: '400px'}
    return this.state.polls.map((placeholder,index) => {
      return(
        <div key={index}>
          <p>{placeholder.race}</p>
          <p>{placeholder.democrat}</p>
          <p>{placeholder.dpercent}</p>
          <p>{placeholder.republican}</p>
          <p>{placeholder.rpercent}</p>
          <img alt="placeholder" style={imgStyle} src={placeholder.img} />
        <hr />
        <br />
        </div>
      )
    })

  }
  render(){
    const divStyle={paddingLeft: '50px'};

    return(
    <div>
      <h3>The Local Polls</h3>
      {this.renderLocal()}
    </div>
    )
  }
}
