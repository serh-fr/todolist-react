import React, { useState } from 'react'
import Todo from './Todo'
import './todo.scss'
import PopupContainer from '../common/popup/PopupContainer'
import TodoFormContainer from './todoForm/TodoFormContainer'
import { SubmissionError } from 'redux-form'
import Modal from '../common/modal/Modal'

const TodoList = ({list, modalVisible, setVisibleModal, 
        nameModal, createTodo, setTodoEditInitial, 
        editTodo, setDoneTodo, checkStatus, deleteTodo, ...props}) => {

    let [typePopup, setTypePopup] = useState(null)

    let [item, setItem] = useState(null)

    let [modalText, setModatText] = useState('')

    const listId = +props.match.params.listId
    const listTodo = list.find(e => e.id === listId)

    if(!listTodo) {
        return <h1>Выберите список</h1>
    }

    const todos = listTodo.todos

    const handleSubmit = formData => {
        debugger
        return new Promise(resolve => resolve()).then(() => {
            todos.forEach(e => {
                if(e.title.toLowerCase() === formData.title.toLowerCase() && typePopup === 'add') {
                    throw new SubmissionError({
                        _error: 'Такой дело уже существует'
                    })
                }
                if(e.title.toLowerCase() === formData.title.toLowerCase() && e.isUrgently === formData.isUrgently && typePopup === 'edit') {
                    throw new SubmissionError({
                        _error: 'Не удалось изменить дело'
                    })
                }
            })
            switch(typePopup) {
                case 'add': {
                    createTodo(listTodo.id, formData)
                    setModatText(`${formData.title} Добавлено в ${listTodo.name}`)
                    break 
                }
                case 'edit': {
                    editTodo(listTodo.id, item.id, formData)
                    setModatText(`Дело ${formData.title} измененно`)
                    break
                }
                default: {}
            }
            setTodoEditInitial(null)
            setVisibleModal(true, 'modalTodo')
        })
    }

    const handleDelete = e => {
        if(e.target.name === 'yes') {
            deleteTodo(listTodo.id, item.id)
            checkStatus(listTodo.id)
        }
        setModatText(`${item.title} удалено из ${listTodo.name}`)
        setVisibleModal(true, 'modalTodo')
    }

    const handleAddTodo = () => {
        setVisibleModal(true, 'addTodo')
        setTypePopup('add')
    }

    const handleDoneChange = (todo) => {
        setDoneTodo(listTodo.id, todo.id)
        checkStatus(listTodo.id)
    }

    return <>
        <h1> {listTodo.name} </h1>
        {todos.length > 0 ? 
            <div>
                {todos.map(e => <Todo 
                    key={e.id} 
                    todo={e} 
                    setTodoEditInitial={setTodoEditInitial} 
                    setVisibleModal={setVisibleModal}
                    setTypePopup={setTypePopup}
                    setItem={setItem}
                    handleDoneChange={handleDoneChange} />)}
            </div>
            : <div>
                В списке дел {listTodo.name} нет дел
            </div>
        }
        <button onClick={ handleAddTodo } className={'button__add'}>Add todo</button>

        {modalVisible && (nameModal === 'addTodo' || nameModal === 'editTodo') && 
        <PopupContainer setVisibleModal={setVisibleModal} setInitial={setTodoEditInitial}>
            <TodoFormContainer onSubmit={ handleSubmit }/>
        </PopupContainer>}

        {modalVisible && (nameModal === 'deleteTodo') && 
        <PopupContainer setVisibleModal={setVisibleModal} setInitial={setTodoEditInitial}>
            <div className={'modal-confirmation'}>
                <p>Удалить {item.title} из списка {listTodo.name} ?</p>
                <div>
                    <button name={'yes'} onClick={handleDelete} className={'button__yes'}>Да</button>
                    <button name={'no'} onClick={handleDelete} className={'button__no'}>Нет</button>
                </div>
            </div>    
        </PopupContainer>}

        {modalVisible && (nameModal === 'modalTodo') &&
        <Modal setVisibleModal={setVisibleModal}>
           {modalText}     
        </Modal>}
    </>
}

export default TodoList