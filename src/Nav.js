import React from 'react';
import {
    NavLink
  } from "react-router-dom";
import './Nav.css';

class Nav extends React.Component {
  constructor() {
      super();
      this.state = {
        current_page: 'home',
        pages: ['home','about','events','registry','philly']
      };
      this.updatePage = this.updatePage.bind(this);
  }

  updatePage(value) {
    this.setState({ current_page: value })
  }

  render() {
    return (
        <div className="et-hero-tabs-container">
                <span className="logo"></span>
                <NavLink className="et-hero-tab" to='home'>home</NavLink>
                <NavLink className="et-hero-tab" to='about'>about</NavLink>
                <NavLink className="et-hero-tab" to='events'>events</NavLink>
                <NavLink className="et-hero-tab" to='registry'>registry</NavLink>
                <NavLink className="et-hero-tab" to='activities'>activities</NavLink>
        </div>
    )
  }

}
export default Nav;
