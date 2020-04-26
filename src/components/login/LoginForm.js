import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormField } from '../common/formControl'
import { isRequired } from '../../utils/validate'
import '../../scss/common.scss'

const Input = FormField('input')

const LoginForm = ({handleSubmit, error}) => {

    return <form onSubmit={ handleSubmit }>
        <Field component={Input} type={'text'} placeholder={'Username'} name={'login'} validate={[isRequired]} />
        <Field component={Input} type={'password'} placeholder={'password'} name={'password'} validate={[isRequired]}/>
        <button className={'button__add'} type={'submit'}>Login</button>
        {error ? <div className={'form-error'}> {error} </div> : ''}
    </form>
}

export default reduxForm({
    form: 'login'
})(LoginForm)