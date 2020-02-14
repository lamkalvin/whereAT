import React from 'react';
import './App.css';
import Settings from './routes/settings';
import ViewSpace from './routes/view-space';
import SurveyView from './routes/surveyView'
import Search from './routes/search';
import {Homebar} from './components';
import Favorites from "./routes/favorites";
import SearchResults from './routes/search-results';
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
import { createBrowserHistory } from "history";

let spaces = require('./study-spaces.json');
const history = createBrowserHistory();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.setState({
      loggedIn: true
    });
  }

  logout() {
    this.setState({
      loggedIn: false
    });
  }

  render() {
    return (
      <Router>
        <div style={{height: '100%'}}>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/search-results">
              <SearchResults data={spaces.data[0]} />
            </Route>
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route path="/settings">
              <Settings handleClick={this.logout} />
            </Route>
            <Route path="/view-space">
              <ViewSpace data={spaces.data[0]} />
            </Route>
            <Route path="/survey">
              <SurveyView />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/location-search">
              <LocationSearchPage data={spaces.data[0]} />
            </Route>
            <Route path="/recently-viewed">
              <RecentlyViewedPage data={spaces.data[0]} />
            </Route>
            <Route path='/login'>
              {this.state.loggedIn ? <Redirect to='/'/> : <LandingPage login={this.login}/>}
            </Route>
            <Route path="/">
              {this.state.loggedIn ? <HomePage history={history}/> : <Redirect to='/login'/>}
            </Route>
          </Switch>
        </div>
          { ((history.location.pathname === "/login") ? !this.state.loggedIn : this.state.loggedIn) && <Homebar onClick={this.handleClick}/> }
      </Router>
    );
  }
}
