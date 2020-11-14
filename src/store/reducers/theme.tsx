import React from 'react'
import * as actionTypes from '../actions/actionTypes'

interface State {
    theme: string
}

const initialState = {
    defaultTheme: 'light'
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_THEME:
            return {
                ...state,
                defaultTheme: action.theme
            }
    
        default:
            return state
    }
}


export default reducer



