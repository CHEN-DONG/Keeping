import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Keep from '../../pages/Keep';
import Category from '../../pages/Keep/Category';
import PostDetail from '../../pages/Keep/PostDetial';
import Search from '../../pages/Keep/Search';
import Login from '../../pages/Common/Login';
import Header from '../../components/Header';

export default class KeepLayout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Keep} />
          <Route path="/category" component={Category} />
          <Route path="/search/:query" component={Search} />
          <Route path="/post/:id" component={PostDetail} />
          <Route path="/entry" component={Login} />
        </Switch>
      </div>
    );
  }
}
