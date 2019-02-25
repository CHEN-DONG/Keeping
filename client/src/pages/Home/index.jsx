import React from 'react';
import { Icon, List } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-container main-container">
        <List
          itemLayout="vertical"
          size="small"
          dataSource={listData}
          renderItem={item => (
            <Link to="/post/1">
              <List.Item
                key={item.title}
                actions={[<IconText type="heart-o" text="0" />]}
                extra={<div className="item-cover" style={{ backgroundImage: 'url(' + item.avatar + ')' }} />}
              >
                <List.Item.Meta
                  title={item.title}
                  description={
                    (
                      <div>
                        <span className="item-category">前端</span>
                        <span>·</span>
                        <span className="item-time">一小时前</span>
                      </div>
                    )
                  }
                />
              </List.Item>
            </Link>
          )
          }
        />
      </div >
    );
  }
}
