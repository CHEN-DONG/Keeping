import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import KeepLayout from './layouts/KeepLayout';
import DashboardLayout from './layouts/DashboardLayout';

export default () => (
  <div>
    <Router>
      <Switch>
        <Route path="/dashboard" component={DashboardLayout} />
        <Route path="/" component={KeepLayout} />
      </Switch>
    </Router>
  </div>
);
