import React, { useState } from "react";
import '../login/index.css';
import { Button, Form, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import swal from 'sweetalert';

async function loginUser(credentials) {
    return fetch('https://www.melivecode.com/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*",
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

const Login = () => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async e => {
        const response = await loginUser({
            username,
            password
        });
        if ('accessToken' in response) {
            swal("Success", response.message, "success", {
                buttons: false,
                timer: 2000,
            })
                .then((value) => {
                    localStorage.setItem('accessToken', response['accessToken']);
                    localStorage.setItem('user', JSON.stringify(response['user']));
                    window.location.href = "/dashboard";
                });
        } else {
            swal("Failed", response.message, "error");
        }
    }
    return (
        <div className='form'>
            <div className='logo'>
                {/* <span>{process.env.REACT_APP_NAME}</span> */}
            </div>
            <Form onFinish={handleSubmit}>
                <Form.Item
                    name='username'
                    rules={[
                        {
                            required: true,
                            message: 'Tài khoản không được để trống!',
                        },
                    ]}>
                    <Input prefix={<UserOutlined style={{ fontSize: 13 }} />} placeholder='Tài khoản' size='large' name="email" onChange={e => setUserName(e.target.value)} />
                </Form.Item>
                <Form.Item
                    name='password'
                    rules={[
                        {
                            required: true,
                            message: 'Mật khẩu không được để trống!',
                        },
                    ]}>
                    <Input.Password prefix={<LockOutlined style={{ fontSize: 13 }} />} placeholder='Mật khẩu' size='large' type="password" name="password" onChange={e => setPassword(e.target.value)} />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit' className='login-form-button' size='large'>
                        Đăng nhập
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
export default Login;