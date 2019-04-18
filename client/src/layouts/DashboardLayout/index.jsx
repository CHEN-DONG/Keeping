import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Row } from 'antd';
import Header from './Header/index';
import Navigation from './Navigation';
import Dashboard from '../../pages/Dashboard';
import PostList from '../../pages/Dashboard/PostList';
import EditPost from '../../pages/Dashboard/EditPost';
import ManageUser from '../../pages/Dashboard/ManageUser';
import ManageRole from '../../pages/Dashboard/ManageRole';

export default class DashboardLayout extends React.Component {
  render() {
    const isLogged = sessionStorage.getItem('isLogin');
    if (isLogged) {
      return (
        <div className="dashboard-layout">
          <Header />
          <Row type="flex" justify="space-between">
            <Navigation />
            <Switch>
              <Route path="/dashboard/post/list" component={PostList} />
              <Route path="/dashboard/post/edit/:id" component={EditPost} />
              <Redirect from="/dashboard/post/edit" to="/dashboard/post/edit/0" />
              <Route path="/dashboard/user" component={ManageUser} />
              <Route path="/dashboard/role" component={ManageRole} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </Row>
        </div>
      );
    }
    return (<Redirect to="/common/entry" />);
  }
}
