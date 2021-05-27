import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/home';

export default class App extends React.Component {
  render() {
    return (        
      <React.Fragment>                                
        <Home />
      </React.Fragment>
    );
  }
}

