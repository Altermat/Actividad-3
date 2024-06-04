import React, { useState } from 'react';
import { Button, Form, Input, Card } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './FormRegister.css'
import axios from 'axios';
import Password from 'antd/es/input/Password';
import { useNavigate } from 'react-router-dom';
// import routes from '/src/components/routes.js';


const FormRegister = () => {

const navigate = useNavigate();

 const [registerError, setRegisterError] = useState(false);

 const [loading,setLoading] = useState(false);
    // Función para mostrar los errores en el formulario
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setRegisterError(true);
    };

    // Función para validar el usuario y contraseña
    const onFinish = async (values) => {
        const token = "" 
    setLoading(true);    
        try{
            const response = await axios.post('https://evaluacion-2.vercel.app/api/users/',{
                name: values.name,
                lastname: values.lastname,
                email: values.email,
                password: values.password,      
                roles: ["servicios_escolares"],
            }, {
                headers: {
                    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTk3NDMzMWM2MTc0MjcyZDY1NDUwZiIsIm5hbWUiOiJrYXJsYSBlcmlrYSIsImxhc3RuYW1lIjoicm9ibGVzIHZhcmdhcyIsImlhdCI6MTcxNzQ1ODgzNCwiZXhwIjoxNzE3NTQ1MjM0fQ.dcn1O_NacDmtNUel2X61dmCgSF7LqR3ELelPqgJruWg"
                }
            });
            console.log('Registro exitoso', response.data);
            navigate('/login');
        }catch(error){
            console.error('Error en el registro:', error.response.data);
            setRegisterError(true);
        }finally{
        setLoading(false);
        }
};
    const validatePassword = ({ getFieldValue }) => ({
        validator(_, value) {
            if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
            }
            return Promise.reject(new Error('Las contraseñas no coinciden.'));
        },
    });
    return(
        <Card
            tittle="Registrate"
            bordered={false}
            className="responsive-card"
        >
            <Form
                name={"normal_register"}
                className={"register_form"}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name={"name"}
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese el nombre de usuario."
                        }
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Nombre" />
                </Form.Item>

                <Form.Item
                    name={"lastname"}
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese los apellidos de usuario."
                        }
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Apellidos" />
                </Form.Item>

                <Form.Item
                    name={"email"}
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese su email."
                        }
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className={"site-form-item-icon"} />} placeholder="Email"/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese su contraseña."
                        },
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Contraseña"
                    />
                </Form.Item>
                <Form.Item
                    name="password-repet"
                    rules={[
                        {
                            required: true,
                            message: "Por favor repita su contraseña.",
                        },
                        ({ getFieldValue }) => validatePassword({ getFieldValue }),
                    ]}
                    >
                        <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type='password'
                        placeholder='Repetir contraseña'
                    />
                    </Form.Item>

                <Form.Item>
                    {registerError && <p style={{ color: 'red' }}>Error al registrar el usuario</p>}
                    <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
                        Registrarse
                    </Button>
                </Form.Item>
                Ya tienes tu cuenta <a href="/Login">Inicia sesión</a>
            </Form>
        </Card>
    )
}
export default FormRegister