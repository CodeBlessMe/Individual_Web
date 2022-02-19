import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, List, Card } from 'antd';
import axios from 'axios';

function Detail(props) {

    const [list, setList] = useState([])

    useEffect(() => {
        axios.get('http://106.52.103.193:3000/api/blog/list')
            .then((res) => {
                setList(res.data.data)
            })
    }, [])

    return (
        <Row justify="center" >
            <Col span={9}>
                <Card>
                    <List
                        itemLayout="horizontal"
                        dataSource={list}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
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
                </Card>

            </Col>
        </Row>
    )
}

export default Detail;