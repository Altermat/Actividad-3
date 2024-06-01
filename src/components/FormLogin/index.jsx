import React from "react";
import { Button, Form, Input, Card } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './FormLogin.css'

const FormLogin = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
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
                        rules={[
                        {
                            required: true,
                            message: 'Por favor ingresa tu nombre de usuario!',
                        },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Por favor ingresa tu contraseña!',
                        },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Contraseña"
                        />
                        </Form.Item>

                        <Form.Item>

                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Iniciar Sesión
                                </Button>

                                </Form.Item>
                                ¿Aún no tienes cuenta? <a href="">Registrate</a>
                </Form>

        </Card>
            );
        };

    export default FormLogin;
