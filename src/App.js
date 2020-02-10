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

import LandingPage from './routes/landingPage';

export default function App() {
  return (
    <Router>
      <div style={{height: '100%'}}>
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
          <Route path="/">
            {/* TODO home */}
            <LandingPage />
          </Route>
        </Switch>
      </div>
      <Homebar />
    </Router>
  );
}