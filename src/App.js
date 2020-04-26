import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.scss'
import { Provider } from 'react-redux'
import store from './redux/store'
import LoginContainer from './components/login/LoginContainer'
import Main from './components/main/Main'

const App = props => {
  return <BrowserRouter>
    <Provider store={store}>
      <Main />
      <Switch>
        <Route path='/login' render={ () => <LoginContainer /> } />
      </Switch>
    </Provider>
  </BrowserRouter>
}

export default App