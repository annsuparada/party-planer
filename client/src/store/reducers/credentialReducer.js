import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from '../actions/index';


export const initialState = {
    isLoading: false,
    isRegisted: false,
    isLoggedIn: false,
    error: null,
}

export const credentialReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isRegisted: true,
                error: null
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case LOGIN_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                error: null,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                isLoading: false,
                error: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                isLoggingIn: false,
                isLoading: false,
            }

        default:
            return state
    }
}