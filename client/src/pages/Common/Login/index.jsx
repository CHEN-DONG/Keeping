import React from 'react';
import { Row } from 'antd';
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
        console.log('Received values of form: ', values);
        axios.post('http://localhost:7000/auth/login', {
          username: values.username,
          password: values.password,
        })
          .then((response) => {
            this.props.history.push('/dashboard');
          });
      }
    });
  }
}

export default withRouter(Login);
