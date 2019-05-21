import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Keep from '../../pages/Keep';
import Category from '../../pages/Keep/Category';
import PostDetail from '../../pages/Keep/PostDetial';
import Search from '../../pages/Keep/Search';
import About from '../../pages/Keep/About';
import Header from '../../components/Header';
import HeaderSearch from '../../containers/HeaderSearch';

export default class KeepLayout extends React.Component {
  render() {
    return (
      <div>
        <HeaderSearch />
        <Switch>
          <Route path="/category" component={Category} />
          <Route path="/search/:type/:query" component={Search} />
          <Route path="/post/:id" component={PostDetail} />
          <Route path="/about" component={About} />
          <Route path="/" component={Keep} />
        </Switch>
      </div>
    );
  }
}
