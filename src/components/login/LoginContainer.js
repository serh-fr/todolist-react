import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Login from './Login'
import { login } from '../../redux/authReducer'

const LoginContainer = props => {
    return <Login {...props} />
}

export default compose(
    connect(null, { login })
)(LoginContainer)