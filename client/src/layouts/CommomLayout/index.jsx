import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../../pages/Common/Login';

export default class CommonLayout extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/common/entry" component={Login} />
        </Switch>
      </div>
    );
  }
}
