import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './modal.scss'

const Modal = props => {
    const el = document.createElement('div')
    const wrapper = document.querySelector('.wrapper')

    useEffect(() => {
        wrapper.appendChild(el)

        setTimeout(() => {
            wrapper.removeChild(el) 
            props.setVisibleModal(false)
        }, 3000)
    })

    return ReactDOM.createPortal(<div className='modal'>{props.children}</div>, el)
}

export default Modal