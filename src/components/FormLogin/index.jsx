import React, { useState } from 'react';
import { Button, Form, Input, Card } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {useNavigate} from "react-router-dom";
import './FormLogin.css'

const FormLogin = () => {
    const [loginError, setLoginError] = useState(false);
    const navigate = useNavigate();

    const user = {
        username: 'admin',
        password: 'admin'
    };

    const onFinish = (values) => {
        console.log('Success:', values);
        if (user.username === values.username && user.password === values.password) {
            setLoginError(false);
            navigate('/home');
        }else{
            onFinishFailed();
        }
    };

    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setLoginError(true);
    };

    return (
        <Card
        title="Bienvenido de nuevo"
        bordered={false}
        className="responsive-card"
        >

            <Form
                    name="normal-login"
                    className='login-form'
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese su usuario'
                        }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder='Usuario' />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese su contraseña'
                        }]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder='Contraseña' />
                    </Form.Item>

                    {loginError && <div className="login-error">Usuario o contraseña incorrectos</div>}

                    <Form.Item>
                        <Button type='primary' htmlType='submit' className='login-form-button'>
                            Iniciar Sesión
                        </Button>
                    </Form.Item>
                    ¿Aún no tienes cuenta? <a href='/register'>Regístrate</a>
                </Form>
            </Card>
            );
        };

    export default FormLogin;
