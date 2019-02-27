import React from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navigation extends React.Component {
  navigationMenus = [
    {
      name: '博客管理',
      path: '/',
      icon: 'form',
      child: [
        {
          name: '文章',
          path: '/',
          icon: 'form',
        },
        {
          name: '分类',
          path: '/',
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
          path: '/',
          icon: 'form',
        },
        {
          name: '角色',
          path: '/',
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
          style={{ width: 256 }}
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
                        <Menu.Item key={`${index}${i}`}>{c.name}</Menu.Item>
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
