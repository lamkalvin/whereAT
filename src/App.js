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

    componentDidMount() {
        const userPresets = localStorage.getItem('userPresets');
        const customSpaces = localStorage.getItem('customSpaces');
        if (!userPresets) {
            localStorage.setItem('userPresets', JSON.stringify({
              "data": []
            }))
        }

        if (!customSpaces) {
          localStorage.setItem('customSpaces', JSON.stringify({
            "data": []
          }))
        }
    }

    logIn() {
      this.setState({
        isLoggedIn : true
      })
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = '/';
    }

    logOut() {
      this.setState({
        isLoggedIn : false
      })
      localStorage.setItem('isLoggedIn', 'false');
      window.location.href = '/';
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
