import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';

export default class App extends React.Component {
  render() {
    return (        
      <Router>                                
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
        </Switch>
      </Router>
    );
  }
}

