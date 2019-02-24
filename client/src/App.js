import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import Routes from './router';
class App extends Component {
  render() {
    return (
      <Router>
        <Routes></Routes>
      </Router>
    );
  }
}

export default App;
