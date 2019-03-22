import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Row } from 'antd';
import Header from '../../components/Header';
import Navigation from './Navigation';
import Dashboard from '../../pages/Dashboard';
import PostList from '../../pages/Dashboard/PostList';
import CreatePost from '../../pages/Dashboard/CreatePost';
import ManageUser from '../../pages/Dashboard/ManageUser';
import ManageRole from '../../pages/Dashboard/ManageRole';

export default class DashboardLayout extends React.Component {
  render() {
    return (
      <div className="dashboard-layout">
        <Header />
        <Row type="flex" justify="space-between">
          <Navigation />
          <Switch>
            <Route path="/dashboard/post/list" component={PostList} />
            <Route path="/dashboard/post/create" component={CreatePost} />
            <Route path="/dashboard/user" component={ManageUser} />
            <Route path="/dashboard/role" component={ManageRole} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Row>
      </div>
    );
  }
}
