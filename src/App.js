import React from 'react';
import './App.css';
import ViewSpace from './routes/view-space/the-think-tank'
import Homebar from './components/homebar';

class App extends React.Component {
  constructor (props){
    super (props)
  }
  render () {
    return ([
      <ViewSpace />, // FIXME / TODO : TEMPORARILY FOR TESTING
      <Homebar />
    ])
  }
}

export default App;
