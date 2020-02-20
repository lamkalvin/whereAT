import React from 'react';
import './App.css';
import { Homebar } from './components';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Container from './components/app-container';

export default class App extends React.Component {
  constructor(props) {
      super(props);
  }

  /**
   * Local Storage must be set up before rendering the app because some
   * filtered study space information is distributed to various pages.
   */
  componentWillMount() {
      const userPresets = localStorage.getItem('userPresets');
      const customSpaces = localStorage.getItem('customSpaces');
      const favoriteSpaces = localStorage.getItem('favoriteSpaces');

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

      if (!favoriteSpaces) {
        localStorage.setItem('favoriteSpaces', JSON.stringify({
          "data": []
        }))
      }
  }

  render() {
    return (
      <Router>
        <Container />
        <Homebar />
      </Router>
    );
  }
}
