import React, { useState } from 'react'
import './list.scss'
import '../todo/todo.scss'
import PopupContainer from '../common/popup/PopupContainer'
import ListItem from './listItem/ListItem'
import { sortAlpabet, sortListForFilter } from '../../utils/helpers'
import ListFilter from './listFilter/ListFilter'
import { SubmissionError } from 'redux-form'
import ListFormContainer from './listForm/ListFormContainer'
import Modal from '../common/modal/Modal'

const List = ({list, modalVisible, modalName, 
        setVisibleModal, createList, deleteList, 
        filter, setFilter, setListEditInitial, 
        editList}) => {

    let [typePopup, setTypePopup] = useState(null)

    let [item, setItem] = useState(null)

    let [modalText, setModatText] = useState('')

    const handleAddList = () => {
        setVisibleModal(true, 'addList')
        setTypePopup('add')
    }

    const handleSubmit = formData => {
        return new Promise(resolve => resolve()).then(() => {
            list.forEach(e => {
                if(e.name.toLowerCase() === formData.name.toLowerCase()) {
                    throw new SubmissionError({
                        _error: 'Такой список дел уже существует'
                    })
                }
            })
            switch(typePopup) {
                case 'add': {
                    createList(formData)
                    setModatText(`Список дел ${formData.name} добавлен`)
                    break
                }
                case 'edit': {
                    editList(formData)
                    setModatText(`Список дел ${formData.name} изменен`)
                    break
                }
                default: {}
            }
            setVisibleModal(true, 'modalList')
            setListEditInitial(null)
        })
    }

    const handleDelete = e => {
        if(e.target.name === 'yes') deleteList(item.id)
        setModatText(`Список дел ${item.name} удален`)
        setVisibleModal(true, 'modalList')
    }

    return <div className={'list'}>
        <div className={'list-nav'}>
            <div>
                <ListFilter setFilter={setFilter} filter={filter}/>
            </div>
            <div>
                {sortListForFilter(list, filter)
                    .sort((a, b) => sortAlpabet(a.name, b.name))
                    .map(e => <ListItem
                        item={e}
                        key={e.id}
                        setVisibleModal={setVisibleModal}
                        setListEditInitial={setListEditInitial}
                        setTypePopup={setTypePopup}
                        setItem={setItem} />)}
            </div>
            <button onClick={handleAddList} className={'button__add'}>Add case</button>
        </div>

        {modalVisible && (modalName === 'addList' || modalName === 'editModal') && <PopupContainer setListEditInitial={setListEditInitial} setVisibleModal={setVisibleModal}>
            <ListFormContainer onSubmit={handleSubmit}/>
        </PopupContainer>}

        {modalVisible && (modalName === 'deleteModal') && 
        <PopupContainer setVisibleModal={setVisibleModal} setInitial={setListEditInitial}>
            <div className={'modal-confirmation'}>
                <p>Удалить список дел {item.name}? Все связанные дела {item.todos.length} также будут удалены:</p>
                <ul>
                    {item.todos.map(e => <li key={e.id}> {e.title} </li>)}
                </ul>
                <div>
                    <button name={'yes'} onClick={handleDelete} className={'button__yes'}>Да</button>
                    <button name={'no'} onClick={handleDelete} className={'button__no'}>Нет</button>
                </div>
            </div>    
        </PopupContainer>}

        {modalVisible && (modalName === 'modalList') &&
        <Modal setVisibleModal={setVisibleModal}>
            {modalText}    
        </Modal>}
    </div>
}

export default List