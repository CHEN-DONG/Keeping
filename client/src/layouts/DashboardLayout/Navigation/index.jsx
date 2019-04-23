import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';


const SubMenu = Menu.SubMenu;

class Navigation extends React.Component {
  navigationMenus = [
    {
      name: '博客管理',
      path: '/',
      icon: 'form',
      child: [
        {
          name: '文章列表',
          path: '/dashboard/post/list',
          icon: 'form',
        },
        {
          name: '新建文章',
          path: '/dashboard/post/edit',
          icon: 'form',
        },
        {
          name: '分类',
          path: '/dashboard/category',
          icon: 'form',
        },
      ],
    },
    {
      name: '后台管理',
      path: '/',
      icon: 'form',
      child: [
        {
          name: '用户',
          path: '/dashboard/user',
          icon: 'form',
        },
        {
          name: '角色',
          path: '/dashboard/role',
          icon: 'user',
        },
      ],
    },
  ]

  render() {
    return (
      <nav className="dashboard-nav-container">
        <Menu
          onClick={this.handleClick}
          style={{}}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['0', '1']}
          mode="inline"
        >
          {
            this.navigationMenus.map((item, index) => {
              return (
                <SubMenu key={index}
                  title={(
                    <span>
                      <Icon type={item.icon} />
                      <span>{item.name}</span>
                    </span>
                  )}
                >
                  {
                    item.child.map((c, i) => {
                      return (
                        <Menu.Item key={`${index}${i}`}>
                          <Link to={c.path}>{c.name}</Link>
                        </Menu.Item>
                      );
                    })
                  }
                </SubMenu>
              );
            })
          }
        </Menu>
      </nav>
    );
  }
}

export default Navigation;
