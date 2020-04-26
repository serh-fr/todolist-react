import React from 'react'
import ListContainer from '../list/ListContainer'
import { Switch, Route, Redirect } from 'react-router-dom'
import TodoListContainer from '../todo/TodoListContainer'
import { compose } from 'redux'
import { connect } from 'react-redux'
import HeaderContainer from '../header/HeaderContainer'

const Main = ({isAuth}) => {

    if(!isAuth) return <Redirect to={'/login'} />

    return <div className={'wrapper'}>
        <HeaderContainer />
        <main>
        <ListContainer />
        <Switch>
            <Route path='/:listId' render={ () => <TodoListContainer /> } />
        </Switch>
        </main>
    </div>
}

export default compose(
    connect(state => ({
        isAuth: state.auth.isAuth
    }))
)(Main)