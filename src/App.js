import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Event from './Event.js'
import Page from './Page.js'
import EventsPage from './EventsPage.js'
import Nav from './Nav.js'
import Registry from './Registry.js'
import Activities from './Activities.js'
import './App.css';

function Home() {
  return <h2>Home</h2>;
}
class App extends React.Component {
  constructor() {
      super();
      this.state = {
        details: {},
        current_page: 'home'
      };
  }
  render() {
    return (
      <Router>
        <Nav />
        <div className="page">
          <Route path="/home">
            <Page title="home" />
          </Route>
          <Route path="/about">
            <Page title="About Us" />
          </Route>
          <Route path="/events">
            <EventsPage />
          </Route>
          <Route path="/registry">
            <Registry />
          </Route>
          <Route path="/activities">
            <Activities title="activities" />
          </Route>
        </div>
        <div className="footer"></div>
      </Router>

      
    //   Object.keys(this.state.details).length == 0 ?
    //     <Form updateDetails={this.updateDetails}></Form>
    //   : 
    //     <div className="events">
    //       { this.renderEvents() }
    //     </div>
    )
  }


}
export default App;
