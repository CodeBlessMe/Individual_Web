import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'antd/dist/antd.css';
import { Layout, BackTop } from 'antd';

import AppHeader from './components/Header/';
import Home from './containers/Home/';
import Message from './containers/Message/';
import Project from './containers/Project/';
import Detail from './containers/Detail/';
import List from './containers/List/';
import MessageResult from './containers/Result/';

import './style.css';

const { Header, Footer, Content } = Layout;

function App(props) {

  return (
    <BrowserRouter>
      <Layout className='container' style={{ height: '100%' }}>
        <Header className='header'>
          <AppHeader />
        </Header>
        <Content className='content'>
          <Routes>
            <Route path='/api/blog/detail/:id' element={<Detail />} />
            <Route path='/api/blog/project-1' element={<Project />} />
            <Route path='/api/message' element={<Message />} />
            <Route path='/api/blog/list' element={<List />} />
            <Route path='/api/message/result' element={<MessageResult />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </Content>
        <Footer className='footer'>&copy;Copyright 2022 Created by 日光灯</Footer>
      </Layout>
      <BackTop>
        <div className='top'>UP</div>
      </BackTop>
    </BrowserRouter>

  )

}

ReactDOM.render(
  <App />, document.getElementById('root')
);