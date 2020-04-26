import { SubmissionError } from "redux-form"

export const isRequired = value => value ? undefined : 'Поле должно быть заполнено'
export const maxLength = max => value => value && value.length > max ? `Максимальное количество знаков ${max} символов` : undefined


export const submitValidate = list => values => {
    return new Promise(resolve => setTimeout(resolve, 1000))
    .then(() => {
        if(values.listName === 'Список') {
            throw new SubmissionError({
                _error: 'Такой список дел уже существует'
            })
        } else {
            return values
        }
    })
}