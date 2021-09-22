/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Calculator from './components/Calculator.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  </Router>
    );
  }
}

export default App;
