import React from 'react';
import './index.scss';

export default class CoverImage extends React.Component {
  state = {
    src: this.props.src ? this.props.src : '',
    height: this.props.height ? this.props.height : '230px',
  }

  render() {
    const { src, height } = this.state;
    return (
      <div
        className="cover-image"
        style={{ backgroundImage: `url(${src})`, height }}
      />
    );
  }
}
