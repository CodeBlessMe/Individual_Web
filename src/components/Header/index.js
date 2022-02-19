import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './style.css';
import { Menu, message } from 'antd';
import { Fragment } from 'react/cjs/react.production.min';

const { SubMenu } = Menu;

function AppHeader(props) {

    const info = () => {
        return message.info('项目还没有上线哦...');
    }

    return (
        <Fragment>
            <Link to='/'>
                <img src={logo} className='app-header-logo' />
            </Link>
            <Menu mode="horizontal" className='app-header-menu'>
                <Menu.Item key="menu1" className='app-header-menu-home'>
                    <Link to='/'>
                        <span>首页</span>
                    </Link>
                </Menu.Item>
                <SubMenu key="menu2" title="项目">
                    <Menu.Item key="sub-menu1" onClick={info}>
                        {/* <Link to='/project-1'>
                                项目1
                            </Link> */}
                        项目1
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="menu3">
                    <Link to='/api/message'>
                        留言
                    </Link>
                </Menu.Item>
                <Menu.Item key="menu4">
                    <Link to='/api/blog/detail/1'>
                        关于
                    </Link>
                </Menu.Item>
            </Menu>
        </Fragment>
    )
}

export default AppHeader;