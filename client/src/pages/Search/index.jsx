import React, { Component } from 'react';
import './index.scss';

export default class Search extends Component {
  render() {
    return (
      <div className="search-container main-container">
        {this.props.match.params.query}
      </div>
    );
  }
}
