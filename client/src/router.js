import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeComponent from './pages/Home/index.jsx';
import Category from './pages/Category/index';
import SearchComponent from './pages/Search';

export default () => (
  <div>
    <Switch>
      <Route exact path="/" component={HomeComponent} />
      <Route exact path="/category" component={Category} />
      <Route path="/search" component={SearchComponent} />
    </Switch>
  </div>
);
