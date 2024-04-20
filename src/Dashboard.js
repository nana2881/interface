import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  TableOutlined,
  FormOutlined,
  OrderedListOutlined,
  ApiOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Home from './Home';
const { Header, Sider, Content } = Layout;

const Dashboard = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          minHeight: '100vh',
          overflowY: 'auto',
        }}
      >
        <div className="demo-logo-vertical">
          <h3 style={{ color: 'white', padding: '5px' }}>
            {collapsed ? 'MR' : 'MrDebrah'}
          </h3>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[window.location.pathname]}
        >
          <Menu.Item key="/" icon={<UserOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/tables" icon={<TableOutlined />}>
            <Link to="/tables">Tables</Link>
          </Menu.Item>
          <Menu.Item key="/forms" icon={<FormOutlined />}>
            <Link to="/forms">Forms</Link>
          </Menu.Item>
          <Menu.Item key="/todolist" icon={<OrderedListOutlined />}>
            <Link to="/todolist">TodoList</Link>
          </Menu.Item>
          <Menu.Item key="/api" icon={<ApiOutlined />}>
            <Link to="/api">API</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              display: 'flex',
              justifyContent: 'flex-start', // Align icon to the left
              alignItems: 'center', // Center vertically
              fontSize: '20px',
              width: 64,
              height: 64,
              marginLeft: '10px',
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
