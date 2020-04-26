import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import TodoList from './TodoList'
import { setVisibleModal } from '../../redux/modalReducer'
import { withRouter } from 'react-router-dom'
import { createTodo, setTodoEditInitial, editTodo, setDoneTodo, checkStatus, deleteTodo } from '../../redux/listReducer'

const TodoListContainer = props => {

    return <div className={'todos'}>
        <TodoList {...props} />
    </div>
}

export default compose(
    withRouter,
    connect(state => ({
        modalVisible: state.modal.isVisible,
        nameModal: state.modal.nameModal,
        list: state.list.list
    }), { setVisibleModal, createTodo, setTodoEditInitial, editTodo, setDoneTodo, checkStatus, deleteTodo })
)(TodoListContainer)