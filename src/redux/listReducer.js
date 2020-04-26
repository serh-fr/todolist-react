import { formattDate } from "../utils/helpers"

const CREATE_LIST = 'CREATE_LIST'
const DELETE_LIST = 'DELETE_LIST'
const SET_FILTER = 'SET_FILTER'
const SET_LIST_EDIT_INITIAL = 'SET_LIST_EDIT_INITIAL'
const EDIT_LIST = 'EDIT_LIST'
const CREATE_TODO = 'CREATE_TODO'
const SET_TODO_INIT_INITIAL = 'SET_TODO_INIT_INITIAL'
const EDIT_TODO = 'EDIT_TODO'
const SET_DONE_TODO = 'SET_DONE_TODO'
const CHECK_STATUS = 'CHECK_STATUS'
const DELETE_TODO = 'DELETE_TODO'

const intialState = {
    list: [
        {
            id: 1,
            name: 'Список дел на 21.08',
            status: 'clean',
            todos: []
        },
        {
            id: 2,
            name: 'Список дел на отпуск',
            status: 'uncompleted',
            todos: [
                {
                    id: 1,
                    title: 'Купить молока',
                    date: '14.06.2019 15:06',
                    isDone: false,
                    isUrgently: false
                },
                {
                    id: 2,
                    title: 'Уничтожить мир',
                    date: '26.04.2018 10:10',
                    isDone: true,
                    isUrgently: true
                },
                {
                    id: 3,
                    title: 'Погладить котика',
                    date: '25.02.2016 12:20',
                    isDone: false,
                    isUrgently: true
                }
            ]
        },
        {
            id: 3,
            name: 'План подготовки к зомбоапокалипсису',
            status: 'completed',
            todos: [
                {
                    id: 1,
                    title: 'title',
                    date: '14.07.2019 22:10',
                    isDone: true
                }
            ]
        }
    ],
    filter: 'unfulfilled',
    listEditInitial: {
        name: null
    },
    todoEditInitial: {
        title: null,
        isUrgently: false
    }
}

const listReducer = (state = intialState, action) => {
    switch(action.type) {
        case CREATE_LIST: {
            const newList = {
                id: state.list.length + 1,
                name: action.list.name,
                status: 'clean',
                todos: []
            }
            return {
                ...state,
                list: [...state.list, newList]
            }
        }
        case DELETE_LIST: {
            return {
                ...state,
                list: state.list.filter(e => e.id !== action.listId)
            }
        }
        case SET_FILTER: {
            return {
                ...state,
                filter: action.filter
            }
        }
        case SET_LIST_EDIT_INITIAL: {
            return {
                ...state,
                listEditInitial: action.list
            }
        }
        case EDIT_LIST: {
            return {
                ...state,
                list: state.list.map(e => e.id === action.list.id ? e = action.list : e)
            }
        }
        case CREATE_TODO: {
            const listTodos = state.list.find(e => e.id === action.listId).todos
            const newTodo = {
                id: listTodos.length + 1,
                title: action.todo.title,
                date: formattDate(new Date()),
                isDone: false,
                isUrgently: action.todo.isUrgently

            }
            return {
                ...state,
                list: state.list.map(e => e.id === action.listId ? {...e, todos: [...e.todos, newTodo]} : e)
            }
        }
        case SET_TODO_INIT_INITIAL: {
            return {
                ...state,
                todoEditInitial: action.todo
            }
        }
        case EDIT_TODO: {
            return {
                ...state,
                list: state.list.map(e => e.id === action.listId ? {...e, todos: e.todos.map(e => e.id === action.todoId ? e = action.todo : e)} : e)
            }
        }
        case SET_DONE_TODO: {
            debugger
            return {
                ...state,
                list: state.list.map(e => e.id === action.listId ? {...e, todos: e.todos.map(e => e.id === action.todoId ? {...e, isDone: true} : e)} : e),
            }
        }
        case CHECK_STATUS: {
            return {
                ...state,
                list: state.list.map(e => e.id === action.listId 
                    ? e.todos.every(e => e.isDone === true) 
                        ? {...e, status: 'completed'}
                        : e.todos.some(e => e.isDone === true)
                            ? {...e, status: 'uncompleted'}
                            : {...e, status: 'clean'}
                    : e)
            }
        }
        case DELETE_TODO : {
            return {
                ...state,
                list: state.list.map(e => e.id === action.listId
                    ? {...e, todos: e.todos.filter(e => e.id !== action.todoId)}
                    : e)
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export const createList = list => ({type: CREATE_LIST, list})
export const deleteList = listId => ({type: DELETE_LIST, listId})
export const setFilter = filter => ({type: SET_FILTER, filter})
export const setListEditInitial = list => ({type: SET_LIST_EDIT_INITIAL, list})
export const editList = list => ({type: EDIT_LIST, list})
export const createTodo = (listId, todo) => ({type: CREATE_TODO, listId, todo})
export const setTodoEditInitial = todo => ({type: SET_TODO_INIT_INITIAL, todo})
export const editTodo = (listId, todoId, todo) => ({type: EDIT_TODO, listId, todoId, todo})
export const setDoneTodo = (listId, todoId) => ({type: SET_DONE_TODO, listId, todoId})
export const checkStatus = listId => ({type: CHECK_STATUS, listId})
export const deleteTodo = (listId, todoId) => ({type: DELETE_TODO, listId, todoId})

export default listReducer