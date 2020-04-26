import React from 'react'
import './header.scss'

const Header = ({login, logout}) => {

    const handleLogout = () => {
        logout()
    }

    return <header>
        <div>
            Todo-list
        </div>
        <div>
            {login}
        </div>
        <div>
            <button className={'button__add'} onClick={ handleLogout }>Log out</button>
        </div>
    </header>
}

export default Header