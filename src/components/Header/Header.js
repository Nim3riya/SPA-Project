import React from "react";
import {UserOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css'
import {Avatar, Col, Layout, Menu, Row} from "antd";


const Header = () => {
    const {Header} = Layout;

    return (
        <Header className="header">
            <div className="logo"/>
            <Row>
                <Col span={18}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                    </Menu>
                </Col>
                <Col span={6}>
                    <Avatar icon={<UserOutlined/>}/>
                </Col>
            </Row>
        </Header>
    )
};

export default Header;