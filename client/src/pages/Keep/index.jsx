import React from 'react';
import { Icon, List } from 'antd';
import { Link } from 'react-router-dom';
import axios from '../../axios';
import './index.scss';


const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default class Keep extends React.Component {

  state = {
    data: [],
    loading: false,
    pagination: {
      total: 0,
      pageSize: 10,
      current: 1,
    },
  }

  render() {
    return (
      <div className="home-container main-container">
        <List
          itemLayout="vertical"
          size="small"
          loading={this.state.loading}
          dataSource={this.state.data}
          renderItem={item => (
            <Link to={`/post/${item.id}`}>
              <List.Item
                key={item.title}
                actions={[<IconText type="heart-o" text="0" />]}
                extra={<div className="item-cover" style={{ backgroundImage: `url(${item.cover})` }} />}
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
      </div>
    );
  }

  componentDidMount() {
    this.handleFecthData();
  }

  handleFecthData() {
    const { pagination } = this.state;
    this.setState({ loading: true });
    axios.get('post', {
      params: {
        pageSize: pagination.pageSize,
        pageNumber: pagination.current,
      },
    }).then((res) => {
      pagination.total = res.data.count;
      this.setState({
        data: res.data.list.map((item) => {
          return item;
        }),
        pagination,
        loading: false,
      });
    });
  }
}
