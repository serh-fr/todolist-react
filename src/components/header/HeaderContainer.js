import React from 'react'
import Header from './Header'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { logout } from '../../redux/authReducer'

const HeaderContainer = props => {
    return <Header {...props} />
}

export default compose(
    connect(state => ({
        login: state.auth.login
    }), { logout })
)(HeaderContainer)