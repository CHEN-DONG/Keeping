import React from 'react';
import { Badge, Icon } from 'antd';
import axios from '../../../axios';
import './index.scss';

export default class PostDeatil extends React.Component {
  state = {
    detail: {},
  }

  render() {
    const { title, brief, cover, content, categories } = this.state.detail;
    return (
      <div className="post-detail-container main-container">
        <div className="detail-header">
          <p className="category">前端</p>
          <img className="cover" src={cover} alt="" />
        </div>
        <div className="detail-content">
          <h3>{title}</h3>
          <div className="detail-post">
            {content}
          </div>
        </div>
        <div className="detail-operation">
          <Badge count={5} offset={[-2, 2]}>
            <div className="circle" onClick={this.handleLikeClick}>
              <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" style={{ fontSize: 18 }} />
            </div>
          </Badge>
        </div>
      </div>
    );
  }

  handleLikeClick = () => {
    alert('like!');
  }

  handleFecthData() {
    axios.get(`post/${this.props.match.params.id}`).then((res) => {
      const { data } = res;
      this.setState({
        detail: data,
      });
    });
  }

  componentDidMount() {
    this.handleFecthData();
  }
}
