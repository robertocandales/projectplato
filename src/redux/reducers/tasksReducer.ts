import { Tasks } from '../../config/DTOs/tasksTypes'
import {
    TASKS_LIST_LOADING,
    TASKS_LIST_SUCCESS,
    TASKS_LIST_FAIL,
    TasksListDispatchTypes,
    TASK_BY_USER,
    COMPLETE_USER_TASK,
    TaskByUser,
} from '../types'

interface IinitialState {
    tasks: Tasks[]
    isloading: boolean
    error: boolean
    taskByUser: Tasks[]
}

const initialState: IinitialState = {
    tasks: [],
    isloading: false,
    error: false,
    taskByUser: [],
}
const tasksReducer = (
    state: IinitialState = initialState,
    action: TasksListDispatchTypes | TaskByUser
): IinitialState => {
    switch (action.type) {
        case TASKS_LIST_LOADING:
            return { ...state, isloading: true, error: false }
        case TASKS_LIST_SUCCESS:
            return { ...state, tasks: action.payload, isloading: false, error: false }
        case TASKS_LIST_FAIL:
            return { ...state, isloading: false, error: true }
        case TASK_BY_USER:
            return {
                ...state,
                taskByUser: state.tasks.filter((task) => task.userId === action.payload),
            }
        case COMPLETE_USER_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === action.payload.id && task.title === action.payload.title) {
                        return { ...task, completed: true }
                    }
                    return task
                }),
                taskByUser: state.taskByUser.map((task) => {
                    if (task.title === action.payload.title) {
                        return { ...task, completed: true }
                    }
                    return task
                }),
            }
        default:
            return state
    }
}

export default tasksReducer
