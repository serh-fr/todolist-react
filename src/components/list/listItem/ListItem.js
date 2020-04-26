import React from 'react'
import '../list.scss'
import { NavLink } from 'react-router-dom'
import '../../../scss/common.scss'

const ListItem = ({item, setVisibleModal, setListEditInitial, setTypePopup, setItem}) => {

    const {name, status, id} = item

    const handleDeleteList = () => {
        debugger
        setItem(item)
        setVisibleModal(true, 'deleteModal')
    }

    const handleEditList = () => {
        debugger
        setListEditInitial(item)
        setVisibleModal(true, 'editModal')
        setTypePopup('edit')
    }

    return <div className={`list-item ${status}`}>
        <NavLink to={`/${id}`}>{name}</NavLink>
        <div>
            <button onClick={ handleEditList } className={'button__edit'}>E</button>
            <button onClick={ handleDeleteList } className={'button__delete'}>D</button>
        </div>
    </div>
}

export default ListItem