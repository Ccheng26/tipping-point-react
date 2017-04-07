import React from 'react';
import { Link } from 'react-router';
const navBarStyling = {padding: "0 20px"}

export default (props) => {
  return(
    <nav style={navBarStyling} className="grey darken-4" >
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Tipping-Point</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/description">Description</Link></li>
          <li><Link to="/myrepresentatives">MyRep</Link></li>
          <li><Link to="/localrepresentatives">Local Reps</Link></li>
        </ul>
      </div>
    </nav>

  );
}

