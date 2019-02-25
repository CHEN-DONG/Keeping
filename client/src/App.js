import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './router';
import Header from './components/Header/index.jsx';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Routes />
        </div>
      </Router>
    );
  }
}

export default App;
