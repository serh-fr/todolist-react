import React from 'react'
import './todo.scss'

const Todo = ({todo, setTodoEditInitial, setVisibleModal, setTypePopup, setItem, handleDoneChange}) => {

    const handleEditTodo = () => {
        setTodoEditInitial(todo)
        setVisibleModal(true, 'editTodo')
        setTypePopup('edit')
        setItem(todo)
    }

    const handleDeleteTodo = () => {
        setVisibleModal(true, 'deleteTodo')
        setItem(todo)
    }

    return <div className={'todo-item'}>
        <input onChange={ () => handleDoneChange(todo) } type={'checkbox'} checked={todo.isDone} />
        <div className={'todo-urgently'}> {todo.isUrgently && <div></div>} </div>
        <div className={'todo-title'}> {todo.title} </div>
        <div className={'todo-date'}> {todo.date} </div>
        <button onClick={ handleEditTodo } className={'button__edit'}>E</button>
        <button onClick={ handleDeleteTodo } className={'button__delete'}>D</button>
    </div>
}

export default Todo