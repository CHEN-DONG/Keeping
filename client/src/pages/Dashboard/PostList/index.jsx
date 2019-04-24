import React from 'react';
import { Table, Divider, Tag, message } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from '../../../axios';


const { Column } = Table;

export default class PostList extends React.Component {
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
      <div className="data-table-container">
        <Table
          dataSource={this.state.data}
          loading={this.state.loading}
          pagination={this.state.pagination}
          onChange={this.handleTableChange}
          rowKey="id"
        >
          <Column
            title="文章标题"
            dataIndex="title"
            key="title"
          />
          <Column
            title="状态"
            dataIndex="status"
            key="status"
          />
          <Column
            title="更新时间"
            dataIndex="updateDate"
            key="updateDate"
          />
          <Column
            title="类别"
            dataIndex="categories"
            key="categories"
            render={categories => (
              <span>
                {categories.map(category => <Tag color="blue" key={category.id}>{category.name}</Tag>)}
              </span>
            )}
          />
          <Column
            title="Action"
            key="action"
            width="180px"
            render={(text, record) => (
              <span>
                <Link to={`/dashboard/post/edit/${record.id}`}>
                  Edit
                </Link>
                <Divider type="vertical" />
                <a onClick={() => this.handleDelete(record.id)}>Delete</a>
                <Divider type="vertical" />
                {
                  record.status === '发布' ? <a onClick={() => this.changeStatus(record.id, 0)}>Cancel</a>
                    : <a onClick={() => this.changeStatus(record.id, 1)}>Publish</a>
                }
              </span>
            )}
          />
        </Table>
      </div>
    );
  }

  componentDidMount = () => {
    this.handleFecthData();
  }

  handleTableChange = (pagination) => {
    const { pagination: pager } = this.state;
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.handleFecthData();
  }

  handleFecthData = () => {
    const { pagination } = this.state;
    this.setState({ loading: true });
    axios.get('admin/post', {
      params: {
        pageSize: pagination.pageSize,
        pageNumber: pagination.current,
      },
    }).then((res) => {
      pagination.total = res.data.count;
      this.setState({
        data: res.data.list.map((item) => {
          item.status = item.status === 1 ? '发布' : '未发布';
          item.updateDate = moment(item.updateDate).utcOffset(8).format('YYYY-M-D HH:mm');
          return item;
        }),
        pagination,
        loading: false,
      });
    });
  }

  handleDelete = (id) => {
    axios.delete(`admin/post/${id}`).then(() => {
      message.success('删除成功');
      this.handleFecthData();
    });
  }

  changeStatus = (id, status) => {
    axios.put(`admin/post/${id}`, {
      status,
    }).then(() => {
      const msg = status === 1 ? '发布成功' : '取消成功';
      message.success(msg);
      this.handleFecthData();
    });
  }
}
