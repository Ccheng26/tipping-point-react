import React from 'react';
import Navbar from './Navbar';
import {findGeo} from './Landing'

export default (props) => {
  return (
    <div
    className="App"

    >
      <Navbar />
      { props.children }
    </div>
  );
}

