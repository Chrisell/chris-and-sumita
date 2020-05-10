import React from 'react';
import {
    NavLink
  } from "react-router-dom";
import './Nav.css';

class Nav extends React.Component {
  constructor() {
      super();
      this.state = {
        current_page: 'home'
      };
  }


  render() {
    return (
        <div className="et-hero-tabs-container">
          <NavLink exact className="et-hero-tab logo" to='/'></NavLink>
          <NavLink className="et-hero-tab" to='about'>us</NavLink>
          <NavLink className="et-hero-tab" to='events'>events</NavLink>
          <NavLink className="et-hero-tab" to='registry'>registry</NavLink>
          {/* <NavLink className="et-hero-tab" to='activities'>philly</NavLink> */}
        </div>
    )
  }

}
export default Nav;
