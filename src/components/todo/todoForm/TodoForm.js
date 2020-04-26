import React from 'react'
import '../../../scss/common.scss'
import { Field, reduxForm } from 'redux-form'
import { isRequired, maxLength } from '../../../utils/validate'
import { FormField } from '../../common/formControl'

const maxLength30 = maxLength(30)

const Input = FormField('input')

const TodoForm = ({handleSubmit, error}) => {
    return <form onSubmit={ handleSubmit } className={'form-popup'}>
        <div className={'form-title'}>Добавить дело</div>
        <div className={'form-item'}>
            <label>
                <span>Название</span>
                <Field 
                    type={'text'} 
                    placeholder={'Write your name todo'} 
                    name={'title'} 
                    component={Input} 
                    validate={[isRequired, maxLength30]}/>
            </label>
        </div>
        <div className={'form-item'}>
            <label>
                <span>Срочно</span>
                <Field 
                    type={'checkbox'} 
                    name={'isUrgently'}
                    component={Input} />
            </label>
        </div>
        {error ? <div className={'form-error'}> {error} </div> : ''}
        <button className={'button__add'} type={'submit'}>Add todo</button>
    </form>
}

export default reduxForm({
    form: 'todoForm'
})(TodoForm)