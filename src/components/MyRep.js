import React, { Component } from 'react';
import { Link } from 'react-router';
import polls from '../data/polls.js';

export default class MyRep extends Component {
  constructor(){
    super();
    this.state = {
      polls: polls
    }
  }
  renderPersonal(){
    const imgStyle = {maxWidth: '400px', maxHeight: '400px'}
    return this.state.polls.map(placeholder => {
      return(
        <div key={placeholder.img}>
        <p>{placeholder.desc}</p>
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
      <h3>Your Representatives</h3>
      {this.renderPersonal()}
    </div>
    )
  }
}
