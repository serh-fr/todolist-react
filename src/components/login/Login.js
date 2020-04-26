import React from 'react'
import './login.scss'
import LoginForm from './LoginForm'

const Login = ({login}) => {

    const handleSubmit = (formData) => {
        login(formData)
    }

    return <div className={'login'}>
        <div className={'login-title'}>
            <h1>Авторизация</h1>
        </div>
        <div className={'login-form'}>
            <LoginForm onSubmit={ handleSubmit } />
        </div>
    </div>
}

export default Login