import React from 'react'

export const FormField = Element => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return <div>
        <Element {...input} {...props} />
        <span className={'field-error'}> {hasError ? meta.error : ''} </span>
    </div>
}