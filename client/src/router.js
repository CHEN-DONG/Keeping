import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import KeepLayout from './layouts/KeepLayout';
import DashboardLayout from './layouts/DashboardLayout';
import CommonLayout from './layouts/CommomLayout';

export default () => (
  <div>
    <Router>
      <Switch>
        <Route path="/dashboard" component={DashboardLayout} />
        <Route path="/common" component={CommonLayout} />
        <Route path="/" component={KeepLayout} />
      </Switch>
    </Router>
  </div>
);
