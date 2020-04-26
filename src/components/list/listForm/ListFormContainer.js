import React from 'react'
import { initialize } from 'redux-form'
import { connect } from 'react-redux';
import ListForm from './ListForm';

const ListFormContainer = (props) => {

    let {list, initializeList} = props
    
    initializeList(list)

    return <ListForm onSubmit={props.onSubmit} />

}

const mapStateToProps = state => {
    return {
        list: state.list.listEditInitial
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initializeList: list => {
            dispatch(initialize('listForm', list))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListFormContainer)