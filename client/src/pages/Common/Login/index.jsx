import React from 'react';
import { message } from 'antd';
import { withRouter } from 'react-router-dom';
import axios from '../../../axios';
import WrappedLoginForm from './LoginForm';
import './index.scss';

class Login extends React.Component {
  render() {
    return (
      <div className="login-container main-container">
        <div className="login-backimg" />
        <div className="form-container">
          <WrappedLoginForm ref="loginForm" onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.refs.loginForm.validateFields((err, values) => {
      if (!err) {
        axios.post('auth/login', {
          username: values.username,
          password: values.password,
        })
          .then(() => {
            message.success('登陆成功');
            sessionStorage.setItem('isLogin', true);
            this.props.history.push('/dashboard');
          });
      }
    });
  }
}

export default withRouter(Login);
