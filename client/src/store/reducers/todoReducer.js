import {
    ADD_TASK_START,
    ADD_TASK_SUCCESS,
    ADD_TASK_FAILURE,
    FETCH_TODO_SUCCESS,

    DELETE_TASK_START,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_FAILURE,

    TOGGLE_COMPLETED
} from '../actions/index';


export const initialState = {
    task: [],
    newTask: [],
    isLoading: false,
    error: [],
    deleteTaskSuccess: '',
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TASK_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case ADD_TASK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                task: [action.payload, ...state.task],
                error: null,
            }
        case ADD_TASK_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case FETCH_TODO_SUCCESS:
            return {
                ...state,
                task: action.payload,
            }
        case DELETE_TASK_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case DELETE_TASK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                task: state.task.filter(e => e.id !== action.payload),
                error: null
            }
        case DELETE_TASK_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case TOGGLE_COMPLETED:
            return { 
                ...state,
                task: state.task.map(todo =>
                    todo.id === action.payload ?
                        { ...todo, completed: !todo.completed}
                        : todo 
                )
            }
        default:
            return state
    }
}