import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, List, Carousel, message, Image } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import axios from 'axios';

import './style.css';
import banner1 from './images/banner1.jpg';
import banner2 from './images/banner2.jpg';
import banner3 from './images/banner3.jpg';
import banner4 from './images/banner4.jpg';

const contentStyle = {
    height: '540px',
    color: '#fff',
    background: '#364d79'
};

function Home(props) {

    const [list, setList] = useState([])

    useEffect(() => {
        axios.get('http://106.52.103.193:3000/api/blog/home-list')
            .then((res) => {
                setList(res.data.data)
            })
    }, [])

    return (
        <Row justify="center" className='row-1'>
            <Col span={20}>
                <Row justify="space-around" align="middle" className='row-2'>
                    <Col span={11} className='home-sub-col'>
                        <Image.PreviewGroup>
                            <Carousel
                                autoplay
                                className='banners'
                                arrows
                                prevArrow={<LeftOutlined />}
                                nextArrow={<RightOutlined />}
                            >
                                <div>
                                    <Image
                                        width={200}
                                        src={banner1}
                                    />
                                </div>
                                <div>
                                    <Image
                                        width={200}
                                        src={banner2}
                                    />
                                </div>
                                <div>
                                    <Image
                                        width={200}
                                        src={banner3}
                                    />
                                </div>
                                <div>
                                    <Image
                                        width={200}
                                        src={banner4}
                                    />
                                </div>
                            </Carousel>
                        </Image.PreviewGroup>
                    </Col>
                    <Col span={11} className='home-sub-col'>
                        <div className="list">
                            <div className="center">

                                <h3>最新内容</h3>
                                <Link className="more" to={'/api/blog/list'}>
                                    查看更多&gt;&gt;
                                </Link>
                                <List
                                    itemLayout="horizontal"
                                    dataSource={list}
                                    renderItem={item => (
                                        <List.Item className='item'>
                                            <List.Item.Meta className='item-content'
                                                title={
                                                    <Link to={`/api/blog/detail/${item.id}`}>
                                                        {item.title}
                                                    </Link>
                                                }
                                                description={item.description}
                                            />
                                        </List.Item>
                                    )}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Home;