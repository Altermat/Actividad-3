import React, { useState } from 'react';
import { Button, Form, Input, Card } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './FormRegister.css'
// import routes from '/src/components/routes.js';

const FormRegister = () => {
 const [registerError, setRegisterError] = useState(false);
    // Función para mostrar los errores en el formulario
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // Función para validar el usuario y contraseña
    const onFinish = (values) => {
        console.log('Success: ', values);
    }
    const validatePasswordConfirmation = ({ getFieldValue }) => ({
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
                name={"normal_login"}
                className={"login_form"}
                initialValues={{
                    remember: true
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name={"username"}
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese el nombre de usuario."
                        }
                    ]}
                >
                    <Input prefix={<UserOutlined className={"site-form-item-icon"} />} placeholder="Usuario" />
                </Form.Item>

                <Form.Item
                    name={"password"}
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese su contraseña."
                        }
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className={"site-form-item-icon"} />}
                        type="password"
                        placeholder="Contraseña"
                    />
                </Form.Item>
                <Form.Item
                    name={"confirm"}
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Por favor confirme su contraseña."
                        },
                        validatePasswordConfirmation
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className={"site-form-item-icon"} />}
                        type="password"
                        placeholder="Confirmar Contraseña"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className={"login-form-button"}>
                        Registrarse
                    </Button>
                </Form.Item>
                Ya tienes tu cuenta <a href="/Login">Inicia sesión</a>
            </Form>
        </Card>
    )
}
export default FormRegister