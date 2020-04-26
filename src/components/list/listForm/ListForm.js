import React from 'react'
import { reduxForm, Field } from 'redux-form'
import '../../../scss/common.scss'
import { FormField } from '../../common/formControl'
import { maxLength, isRequired } from '../../../utils/validate'

const maxLength30 = maxLength(30)

const Input = FormField('input')

const ListForm = ({handleSubmit, error}) => {

    return <form onSubmit={handleSubmit} className={'form-popup'}>
        <div className={'form-title'}>Добавить список дел</div>
        <div className={'form-item'}>
            <label>
                <span>Название</span>
                <Field 
                    type={'text'} 
                    placeholder={'Write your name list todos'} 
                    name={'name'} 
                    component={Input} 
                    validate={[isRequired, maxLength30]}/>
            </label>
        </div>
        {error ? <div className={'form-error'}> {error} </div> : ''}
        <button className={'button__add'} type={'submit'}>Add list todos</button>
    </form>
}

export default reduxForm({
    form: 'listForm'
})(ListForm)
