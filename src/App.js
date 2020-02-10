import React from 'react';
import './App.css';
import Settings from './routes/settings';
import ViewSpace from './routes/view-space/the-think-tank';
import {
  Survey,
  Homebar
} from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from './routes/landingPage/LandingPage';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/view-space">
              <ViewSpace />
            </Route>
            <Route path="/survey">
              <Survey />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/">
              {/* TODO home */}
              <LandingPage />
            </Route>
          </Switch>
        </div>
        <Homebar onClick={this.handleClick} />
      </Router>
    );
  }
}