import React from 'react';
import './App.css';
import Settings from './routes/settings';
import SurveyView from './routes/survey';
import Search from './routes/search';
import ViewSpace from './routes/view-space/the-think-tank';
import Homebar from './components/homebar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

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
              <SurveyView />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/">
              {/* TODO home */}
            </Route>
          </Switch>
        </div>
        <Homebar onClick={this.handleClick} />
      </Router>
    );
  }
}