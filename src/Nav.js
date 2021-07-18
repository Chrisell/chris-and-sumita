import React from 'react';
import {
  Navbar,
  Nav as Navi
} from 'react-bootstrap';
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
      <Navbar className="et-hero-tabs-container" expand="lg">
       <Navbar.Brand href="/">
            <img src="img/mono.png" alt="S &amp; C"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="et-hero-tabs">
            <Navi className="me-auto">
              <Navi.Link className="et-hero-tab" href='/about'>us</Navi.Link>
              <Navi.Link className="et-hero-tab" href='events'>events &amp; details</Navi.Link>
              <Navi.Link className="et-hero-tab" href='registry'>registry</Navi.Link>
              <Navi.Link className="et-hero-tab" href='rsvp'>rsvp</Navi.Link>
            </Navi>
          </Navbar.Collapse>
      </Navbar>
    )
  }

}
export default Nav;
