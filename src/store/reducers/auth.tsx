import React from 'react'
import * as actionTypes from '../actions/actionTypes'

type State =  {
    isAuth: boolean 
}

const initialState= {
     isAuth: false
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCESS:
            return {
                ...state,
                isAuth: action.token
            }
    
        default:
            return state
    }
}


export default reducer