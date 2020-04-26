import { auth } from "../api"
import { stopSubmit } from "redux-form"

const SET_USER = 'SET_USER'

const initialState = {
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    debugger
    switch(action.type) {
        case SET_USER: {
            return {
                ...state,
                ...action.data
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export const setUser = (login, isAuth) => ({type: SET_USER, data: {login, isAuth}})

export const login = data => async dispatch => {
    const response = await auth()
    const {login, password} = data

    if(login !== response.data.login || password !== response.data.password) {
        dispatch(stopSubmit('login', {_error: 'Неверный логин или пароль'}))
    } else {
        dispatch(setUser(login, true))
    }
}

export const logout = () => dispatch => {
    dispatch(setUser(null, false))
}

export default authReducer