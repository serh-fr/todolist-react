const SET_VISIBLE_MODAL = 'CLOSE_MODAL'

const initialState = {
    isVisible: false,
    nameModal: null
}

const modalReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_VISIBLE_MODAL: {
            return {
                ...state,
                isVisible: action.bool,
                nameModal: action.nameModal
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export const setVisibleModal = (bool, nameModal = null) => ({type: SET_VISIBLE_MODAL, bool, nameModal})

export default modalReducer