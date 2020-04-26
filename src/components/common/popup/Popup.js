import React from 'react'
import './popup.scss'

const Popup = ({setVisibleModal, children, setInitial, setItem}) => {

    const handleClick = () => {
        if(setItem) setItem(null)
        if(setInitial) setInitial(null)
        setVisibleModal(false)
    }

    return <div className={'popup'}>
        <div onClick={handleClick} className={'popup-close'}>X</div>
        {children}
    </div>
}

export default Popup