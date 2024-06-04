import React, { useState } from 'react';
import { Button, Form, Input, Card } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import './FormLogin.css'

const FormLogin = () => {
    const [loginError, setLoginError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    

    const onFinish = (values) => {
        const { email, password } = values;
        setLoading(true);

        axios.post('https://evaluacion-2.vercel.app/api/auth/signin', {
            email: email,
            password: password
        })
            .then((response) => {
                console.log('Login successful:', response.data);
                setLoading(false);
                setLoginError(false);
                // Almacena el token en el localStorage o en el contexto de la aplicación
                localStorage.setItem('token', response.data.token);
                notification.success({
                    message: 'Inicio de sesión exitoso',
                    description: 'Bienvenido de nuevo.',
                    placement: 'topRight',
                });
                navigate('/'); // Redirige a la página de inicio
            })
            .catch((error) => {
                console.error('Login failed:', error.response.data);
                setLoading(false);
                setLoginError(true);
            });
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
                    onFinishFailed={onFinishFailed}
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
                        {loginError && <p style={{color: 'red'}}>Usuario o contraseña incorrectos</p>}
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
