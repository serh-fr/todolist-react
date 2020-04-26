import React from 'react'
import Modal from "../components/common/modal/Modal"

export const sortAlpabet = (a, b) => {
    const minLength = Math.min(a.length, b.length)
    for(let i = 0; i < minLength; i++) {
        if(a > b) return 1
        if(a < b) return -1
        i++
    }
}

export const sortListForFilter = (list, filter) => {
    switch(filter) {
        case 'unfulfilled': {
            return list.filter(e => e.todos.length === 0 || e.todos.some(e => !e.isDone))
        }
        case 'fulfilled': {
            return list.filter(e => e.todos.length > 0 &&  e.todos.every(e => e.isDone))
        }
        default: {
            return list
        }
    }
}

export const formattDate = date => {
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth()+1
    return `${date.getDate()}.${month}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
}