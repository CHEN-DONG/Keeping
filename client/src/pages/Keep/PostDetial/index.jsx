import React from 'react';
import { Badge, Icon } from 'antd';
import './index.scss';

export default class PostDeatil extends React.Component {
  render() {
    return (
      <div className="post-detail-container main-container">
        <div className="detail-header">
          <p className="category">前端</p>
          <p className="tips">{this.props.match.params.id}</p>
        </div>
        <div className="detail-content">
          <h3>如何给女朋友解释什么是反向代理？</h3>
          <div className="detail-post">
            正向代理正向代理（forward proxy）：是一个位于客户端和目标服务器之间的服务器(代理服务器)，为了从目标服务器取得内容，客户端向代理服务器发送一个请求并指定目标，然后代理服务器向目标服务器转交请求并将获得的内容返回给客户端。这种代理其实在生活中是比较常见的，比如科学上网技术，其用到的就是代理技术。有时候，用户想要访问某国外网站，该网站无法在国内直接访问，但是我们可以访问到一个代理服务器，这个代理服务器可以访问到这个国外网站。这样呢，用户对该国外网站的访问就需要通过代理服务器来转发请求，并且该代理服务器也会将请求的响应再返回给用户。这个上网的过程就是用到了正向代理。
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
}
