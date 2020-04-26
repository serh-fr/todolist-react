import { createStore, combineReducers, applyMiddleware } from "redux";
import listReducer from "./listReducer";
import {reducer as FormReducer} from 'redux-form'
import modalReducer from "./modalReducer";
import thunk from "redux-thunk";
import authReducer from "./authReducer";

const reducers = combineReducers({
    list: listReducer,
    modal: modalReducer,
    form: FormReducer,
    auth: authReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store