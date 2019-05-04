import React from 'react';
import { Row, Button, message } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import axios from '../../../axios.js';

class Header extends React.Component {
  render() {
    return (
      <header className="header-container">
        <Row className="header" type="flex" justify="space-between" align="middle">
          <div className="left-content">
            <Link to="/"><h3>Keep</h3></Link>
          </div>
          <Row className="right-content" type="flex" align="middle">
            <Button onClick={this.handleLogout}>注销</Button>
          </Row>
        </Row>
      </header>
    );
  }

  handleLogout = () => {
    axios.post('auth/logout')
      .then(() => {
        message.success('注销成功');
        sessionStorage.removeItem('isLogin');
        this.props.history.push('/common/entry');
      });
  }
}

export default withRouter(Header);
