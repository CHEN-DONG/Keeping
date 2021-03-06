import React from 'react';
import { Avatar, Row, Input, Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import emoji from 'node-emoji';
import './index.scss';

const Search = Input.Search;

class Header extends React.Component {
  headerMenus = [
    {
      name: '首页',
      path: '/',
      icon: ':cat:',
    },
    {
      name: '分类',
      path: '/category',
      icon: ':dog:',
    },
    {
      name: 'Me',
      path: '/about#/step1',
      icon: ':horse:',
    },
  ]

  state = {
    current: '0',
  }

  render() {
    const menu = (
      <Menu
        onClick={this.handleNavClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        style={{ lineHeight: '60px' }}
      >
        {
          this.headerMenus.map((item, index) => {
            return (
              <Menu.Item key={index}>
                <Link to={item.path}>
                  {emoji.get(item.icon)}
                  {item.name}
                </Link>
              </Menu.Item>
            );
          })
        }
      </Menu>
    );

    return (
      <header className="header-container">
        <Row className="header" type="flex" justify="space-between" align="middle">
          <Row className="left-content" type="flex" align="middle">
            <div className="header-logo">
              <Avatar shape="square" size={50} src={require('./assets/logo.jpeg')} />
              <p>{this.props.searchValue}</p>
            </div>
            <div className="header-menu">
              {menu}
            </div>
          </Row>
          <div className="right-content">
            <div className="header-search">
              <Search
                onSearch={this.handleSearch}
                style={{ width: 200 }}
              />
            </div>
          </div>
        </Row>
      </header>
    );
  }

  handleNavClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  handleSearch = (val) => {
    this.props.changeValue(val);
    this.props.history.push(`/search/all/${val}`);
  }
}

export default withRouter(Header);
