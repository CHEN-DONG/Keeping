import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomeComponent from './pages/Home';
import SearchComponent from './pages/Search';

export default ()=> (
  <div>
    <Switch>
      <Route exact path="/" component={HomeComponent}></Route>
      <Route path="/search" component={SearchComponent}></Route>
    </Switch>
  </div>
)