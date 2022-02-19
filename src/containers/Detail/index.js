import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Row, Col, Card } from 'antd';
import axios from 'axios';
import './style.css';

function Detail(props) {

    let params = useParams();

    const [list, setList] = useState([])

    useEffect(() => {
        axios.get('http://106.52.103.193:3000/api/blog/detail?id=' + params.id)
            .then((res) => {
                setList(res.data.data)
            })
    }, [])

    return (
        <Row justify="center" >
            <Col span={9} className='about'>
                <div className="site-card-border-less-wrapper">
                    <Card >
                        <div className='detail'
                            dangerouslySetInnerHTML={{ __html: list.content }}>
                        </div>
                    </Card>
                </div>
            </Col>
        </Row>
    )
}

export default Detail;