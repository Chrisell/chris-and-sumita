import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import About from './About.js'
import Page from './Page.js'
import EventsPage from './EventsPage.js'
import Nav from './Nav.js'
import Registry from './Registry.js'
import Activities from './Activities.js'
import './App.css';

const history = createBrowserHistory()

class App extends React.Component {
  constructor() {
      super();
      this.state = {
        details: {},
        current_page: '/'
      };
  }
  render() {
    let active_page = history.location.pathname.substring(1)
    return (
      <Router>
        <Nav />
        <div className={ active_page+ " page"}>
          <Switch>
            <Route path="/about">
              <About title="About Us" />
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
            <Route path="/">
              <Page title="Home" />
            </Route>
          </Switch>          
        </div>
        <div className="footer"></div>
      </Router>
    )
  }


}
export default App;
