import { authActionTypes } from "./auth.types";

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    userData: {},
    message: '',
    loginMessage: ''
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authActionTypes.REGISTER_START:
        case authActionTypes.LOGIN_START:
            return {
                ...state, isLoading: true, message: '', loginMessage: ''
            }
        case authActionTypes.REGISTER_SUCCESS:
            return {
                ...state, isLoading: false, userData: action.payload
            }
        case authActionTypes.REGISTER_FAILED:
            return {
                ...state, isLoading: false, message: action.payload
            }

        // Login
        case authActionTypes.LOGIN_SUCCESS:
            return {
                ...state, isLoading: false, userData: action.payload, isLoggedIn: true
            }
        case authActionTypes.LOGIN_FAILED:
            return {
                ...state, isLoading: false, loginMessage: action.payload
            }
        case authActionTypes.LOGOUT:
            return {
                ...state, isLoggedIn: false
            }
        default:
            return state
    }
}