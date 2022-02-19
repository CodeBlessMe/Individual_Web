import React, { useState } from 'react';
import { Input, Row, Col, Card, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Message(props) {

    const { TextArea } = Input;
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [content, setContent] = useState('');

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeContact = e => {
        setContact(e.target.value);
    };

    const onChangeContent = e => {
        setContent(e.target.value);
    };

    const info = () => {
        return message.info('空消息会被自动过滤哦...');
    }


    const submit = e => {
        if (content.length > 0) {
            const url = `http://106.52.103.193:3000/api/message/new`;
            const data = {
                "name": name,
                "contact": contact,
                "content": content
            };
            axios.post(url, data, {
                headers: { 'Content-Type': 'application/json' }
            }).then(res => {
                console.log(res);
            });
        } else {
            info();
        }
    };

    return (
        <Row justify="center" >
            <Col span={9}>
                <Card>

                    <Input
                        placeholder="你可以输入你的名字，让我知道你是谁"
                        allowClear
                        onChange={onChangeName} />
                    <br />
                    <br />
                    <Input
                        placeholder="可以留下你的联系方式，让我联系你"
                        allowClear
                        onChange={onChangeContact} />
                    <br />
                    <br />
                    <TextArea className='message'
                        placeholder="你想说什么(必填)"
                        allowClear
                        onChange={onChangeContent}
                        rules={[{ required: true }]} />
                    <br />
                    <br />

                    <Link to={'/api/message/result'}>
                        <Button
                            type="primary"
                            onClick={submit}
                            htmlType="submit">
                            提交
                        </Button>
                    </Link>
                </Card>
            </Col>
        </Row>
    )
}

export default Message;