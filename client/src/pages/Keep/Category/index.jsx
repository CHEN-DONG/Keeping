import React from 'react';
import { Card, Row } from 'antd';
import './index.scss';

const { Meta } = Card;

export default class Category extends React.Component {
  state = {
    data: [
      {
        name: 'test',
        cover: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        des: 'des',
      },
      {
        name: 'test',
        cover: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        des: 'des',
      },
      {
        name: 'test',
        cover: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        des: 'des',
      },
      {
        name: 'test',
        cover: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        des: 'des',
      },
    ],
  }

  render() {
    return (
      <div className="category-container main-container">
        <Row type="flex" justify="space-between">
          {
            this.state.data.map((item, index) => {
              return (
                <Card key={index}
                  className="category-card"
                  cover={<img alt="example" src={item.cover} />}
                >
                  <Meta
                    title={item.name}
                    description={item.des}
                  />
                </Card>
              );
            })
          }
        </Row>
      </div>
    );
  }
}
