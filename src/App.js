import React from 'react';
import './App.css';
import Settings from './routes/settings';
import ViewSpace from './routes/view-space/the-think-tank';
import Homebar from './components/homebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
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
          <Route path="/">
          </Route>
        </Switch>
      </div>
      <Homebar />
    </Router>
  );
}

// class App extends React.Component {
//   constructor (props){
//     super (props)
//   }
//   render () {
//     return ([
//       <ViewSpace />, // FIXME / TODO : TEMPORARILY FOR TESTING
//       <Homebar />
//     ])
//   }
// }

// export default App;
