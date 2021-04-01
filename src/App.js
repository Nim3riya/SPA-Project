import React from "react";
import "./App.css";
import 'antd/dist/antd.css'
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {Link, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Layout, Menu} from 'antd';

const {Content, Footer, Sider} = Layout;

class App extends React.Component {
    render() {
        return (
            <Layout>
                <Header />
                <Content style={{padding: '0 50px'}}>
                    <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                style={{height: '100%'}}
                            >
                                <Menu.Item key="1"><Link to='/profile'> Профиль </Link></Menu.Item>
                                <Menu.Item key="2"><Link to='/dialogs'>Сообщения</Link></Menu.Item>
                                <Menu.Item key="3"><Link to='/users'>Пользователи</Link></Menu.Item>
                            </Menu>
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280}}>
                            <div>
                                <Route path='/profile'
                                       render={() => <Profile/>}/>
                                <Route path='/dialogs'
                                       render={() => <DialogsContainer/>}/>
                            </div>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }
}

export default App;