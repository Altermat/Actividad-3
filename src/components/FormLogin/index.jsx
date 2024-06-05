import React, { useState } from 'react';
import { Button, Form, Input, Card } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import authService from '../../services/auth';
import { useAuth } from '../../hooks/useAuth'
import axios from 'axios';
import './FormLogin.css'

const FormLogin = () => {
    const [loginError, setLoginError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const useAuthData = useAuth();
    console.log(useAuthData);

    const onFinish = async (values) => {
        setLoading(true);
        setLoginError(false);
        try{
            const response = await authService.loginFn(values.username, values.password);
            if (response && response.data) {
                localStorage.setItem('token', response.data.token);
                console.log(response.data.token)
                navigate('/');
                
            } else {
                console.error('Error al iniciar sesión: Respuesta inesperada');
                setLoginError(true);
            }

        }catch(error){
            console.error('Error en el login:', error.response ? error.response.data : error.message);
            setLoginError(true);
        }finally{
            setLoading(false);
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
