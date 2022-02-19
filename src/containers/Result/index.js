import React from 'react';
import { Result, Button, Image } from 'antd';
import { Link } from 'react-router-dom';
import icon from './icon.png';

import { Fragment } from 'react/cjs/react.production.min';


function MessageResult(props) {

    return (
        <Fragment>
            <Result
                icon={<Image
                    width={150}
                    src={icon}
                />}
                title="收到消息啦!"
                extra={
                    <Link to={'/'}>
                        <Button type="primary">回到首页</Button>
                    </Link>
                }
            />
        </Fragment>
    )
}

export default MessageResult;