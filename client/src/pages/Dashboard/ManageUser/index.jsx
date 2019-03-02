import React from 'react';
import { Table, Divider, Tag, Modal } from 'antd';

const { Column } = Table;

const data = [{
  key: '1',
  firstName: 'John',
  lastName: 'Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  firstName: 'Jim',
  lastName: 'Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];

export default class ManageUser extends React.Component {
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  }

  render() {
    return (
      <div className="data-table-container">
        <Table dataSource={data}>
          <Column
            title="名称"
            dataIndex="name"
            key="name"
          />
          <Column
            title="角色"
            dataIndex="category"
            key="category"
          />
          <Column
            title="邮箱"
            dataIndex="status"
            key="status"
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
