import React from 'react';
import { Icon, List } from 'antd';
import { Link } from 'react-router-dom';
import Navigation from './Navigation/index';
import './index.scss';

export default class Home extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <Navigation />
      </div>
    );
  }
}
