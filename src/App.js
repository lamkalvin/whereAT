import React from 'react';
import './App.css';
import Settings from './routes/settings';
import ViewSpace from './routes/view-space';
import Search from './routes/search';
import { Homebar } from './components';
import Favorites from "./routes/favorites";
import SearchResults from './routes/search-results';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
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
        this.clearAllLocalData = this.clearAllLocalData.bind(this);
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

    componentDidMount() {
        const userPresets = localStorage.getItem('userPresets');
        if (!userPresets) {
            localStorage.setItem('userPresets', JSON.stringify({
                "data": []
            }))
        }
    }

    clearAllLocalData() {
        localStorage.setItem('userPresets', JSON.stringify({
            "data": []
        }))
    }

  render() {
    return (
      <Router>
        <div style={{height: '100%'}}>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/search-results" render={() => <SearchResults data={spaces.data[0]}/>} />
            <Route path="/favorites" render={() => <Favorites />} />
            <Route path="/settings">
              <Settings handleClick={this.clearAllLocalData} />
            </Route>
            <Route path="/view-space" component={ViewSpace} />
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/location-search">
              <LocationSearchPage data={spaces.data[0]} />
            </Route>
            <Route path="/recently-viewed">
              <RecentlyViewedPage data={spaces.data[0]} />
            </Route>
            {/* <Route path='/login'>
              {this.state.loggedIn ? <Redirect to='/'/> : <LandingPage login={this.login}/>}
            </Route> */}
            <Route path="/" render={() => <HomePage history={history}/>} />
          </Switch>
        </div>
        <Homebar />
      </Router>
    );
  }
}
