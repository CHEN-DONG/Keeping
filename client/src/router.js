import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/index.jsx';
import Category from './pages/Category/index';
import PostDetail from './pages/PostDetial/index';
import Search from './pages/Search/index';

export default () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/category" component={Category} />
      <Route path="/search/:query" component={Search} />
      <Route path="/post/:id" component={PostDetail} />
    </Switch>
  </div>
);
