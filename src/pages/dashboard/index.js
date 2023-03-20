import React from 'react';
import './index.css';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    DownOutlined
} from '@ant-design/icons';
import { Layout, Menu, Space, Dropdown, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const items = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
}));
const itemsDropMenu = [
    {
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
        key: '0',
    },

];
const Dashboard = () => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <Layout hasSider>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >

                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />

            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Dropdown
                        menu={{
                            itemsDropMenu,
                        }}
                        trigger={['click']}
                    >
                        <div>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Click me
                                    <DownOutlined />
                                </Space>
                            </a>
                        </div>
                    </Dropdown>
                </Header>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
                        <p> Welcome {user.fname} {user.lname}</p>
                        {
                            // indicates very long content
                            Array.from({ length: 40 }, (_, index) => (
                                <React.Fragment key={index}>
                                    {index % 20 === 0 && index ? '' : ''}
                                    <br />
                                </React.Fragment>
                            ))
                        }
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default Dashboard;