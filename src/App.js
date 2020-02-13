import React from 'react';
import './App.css';
import Settings from './routes/settings';
import ViewSpace from './routes/view-space/the-think-tank';
import SurveyView from './routes/surveyView'
import Search from './routes/search';
import {Homebar} from './components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import LandingPage from './routes/landingPage/LandingPage';
import HomePage from './routes/homePage';
import LocationSearchPage from './routes/locationSearchPage';
import RecentlyViewedPage from './routes/recentlyViewedPage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
    this.login = this.login.bind(this);
  }

  login() {
    this.setState({
      loggedIn: true
    });
  }

  render() {
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
              <SurveyView />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/location-search">
              <LocationSearchPage />
            </Route>
            <Route path="/recently-viewed">
              <RecentlyViewedPage />
            </Route>
            <Route path='/login'>
              {this.state.loggedIn ? <Redirect to='/'/> : <LandingPage login={this.login}/>}
            </Route>
            <Route path="/">
              {this.state.loggedIn ? <HomePage /> : <Redirect to='/login'/>}
            </Route>
          </Switch>
        </div>
        {this.state.loggedIn ? <Homebar onClick={this.handleClick}/> : null}
      </Router>
    );
  }
}