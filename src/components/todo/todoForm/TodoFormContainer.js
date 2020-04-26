import React from 'react'
import { connect } from 'react-redux'
import { initialize } from 'redux-form'
import TodoForm from './TodoForm'

const TodoFormContainer = props => {
    debugger

    let {todo, initializeTodo} = props

    initializeTodo(todo)

    return <TodoForm onSubmit={props.onSubmit} />

}

const mapStateToProps = state => {
    return {
        todo: state.list.todoEditInitial
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initializeTodo: todo => {
            dispatch(initialize('todoForm', todo))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFormContainer)