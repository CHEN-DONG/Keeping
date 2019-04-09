import React from 'react';
import { Table, Divider, Tag, Modal } from 'antd';
import axios from '../../../axios';

const { Column } = Table;

export default class PostList extends React.Component {
  state = {
    data: [],
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  }

  render() {
    return (
      <div className="data-table-container">
        <Table dataSource={this.state.data} rowKey="id">
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
                {categories.map(category => <Tag color="blue" key={category}>{category}</Tag>)}
              </span>
            )}
          />
          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <span>
                <a onClick={this.showModal}>Edit</a>
                <Divider type="vertical" />
                <a>Delete</a>
              </span>
            )}
          />
        </Table>
        <Modal
          title="Title"
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{this.state.ModalText}</p>
        </Modal>
      </div>
    );
  }

  componentDidMount = () => {
    axios.get('post', { loading: true }).then((res) => {
      console.log(res);
      this.setState({
        data: res.data,
      });
    });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }
}
