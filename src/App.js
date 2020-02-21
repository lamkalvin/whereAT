import React from 'react';
import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Container from './components/app-container';
import LandingPage from './routes/landingPage';

export default class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn'))
      }
      this.logIn = this.logIn.bind(this);
      this.logOut = this.logOut.bind(this);
  }

  /**
   * Local Storage must be set up before rendering the app because some
   * filtered study space information is distributed to various pages.
   */
  componentWillMount() {
      const userPresets = localStorage.getItem('userPresets');
      const customSpaces = localStorage.getItem('customSpaces');
      const favoriteSpaces = localStorage.getItem('favoriteSpaces');
      const recentlyViewedSpaces = localStorage.getItem('recentlyViewedSpaces');

      if (!customSpaces) {
          localStorage.setItem('customSpaces', JSON.stringify({
            "data": []
          }))
      }

      if (!favoriteSpaces) {
          localStorage.setItem('favoriteSpaces', JSON.stringify({
            "data": []
          }))
      }

      if (!recentlyViewedSpaces) {
          localStorage.setItem('recentlyViewedSpaces', JSON.stringify({
            "data": []
          }))
      }
  }


  render() {
    console.log(this.state.isLoggedIn);
    return (
      <Router>
        { this.state.isLoggedIn ? <Container logOut={this.logOut} /> : <LandingPage logIn={this.logIn}/> }
      </Router>
    );
  }
}
