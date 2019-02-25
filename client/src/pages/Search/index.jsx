import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <div>
        {this.props.match.params.query}
      </div>
    );
  }
}
