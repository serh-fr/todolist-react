import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './popup.scss'
import Popup from './Popup'

const PopupContainer = props => {
    const el = document.createElement('div')

    useEffect(() => {
        document.body.appendChild(el)

        return () => {
            document.body.removeChild(el)
        }
    })

    return ReactDOM.createPortal(<Popup {...props} />, el)
}

export default PopupContainer