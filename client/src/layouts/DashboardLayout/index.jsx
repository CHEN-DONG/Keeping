import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Row } from 'antd';
import Header from '../../components/Header';
import Navigation from './Navigation';
import Dashboard from '../../pages/Dashboard';
import PostList from '../../pages/Dashboard/PostList';

export default class DashboardLayout extends React.Component {
  render() {
    return (
      <div className="dashboard-layout">
        <Header />
        <Row type="flex" justify="space-between">
          <Navigation />
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/dashboard/post/list" component={PostList} />
            {/* <Redirect exact from="/dashboard" to="/post/list" /> */}
          </Switch>
        </Row>
      </div>
    );
  }
}
