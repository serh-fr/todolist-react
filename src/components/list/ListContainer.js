import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import List from './List'
import { setVisibleModal } from '../../redux/modalReducer'
import { createList, deleteList, setFilter, setListEditInitial, editList } from '../../redux/listReducer'

const ListContainer = props => {
    return <List {...props} />
}

export default compose(
    connect(state => ({
        ...state.list,
        modalVisible: state.modal.isVisible,
        modalName: state.modal.nameModal,
        listEditInitial: state.listEditInitial,
        isAuth: state.auth.isAuth
    }), { setVisibleModal, createList, deleteList, setFilter, setListEditInitial, editList })
)(ListContainer)