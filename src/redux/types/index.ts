import { Tasks } from '../../config/DTOs/tasksTypes'
import { UserList } from '../../config/DTOs/usersTypes'

export const USER_LIST_LOADING = 'USER_LIST_LOADING'
export const USER_LIST_SUCCESS = 'USER_LIST_SUCCESS'
export const USER_LIST_FAIL = 'USER_LIST_FAIL'

export const TASKS_LIST_LOADING = 'TASKS_LIST_LOADING'
export const TASKS_LIST_SUCCESS = 'TASKS_LIST_SUCCESS'
export const TASKS_LIST_FAIL = 'TASKS_LIST_FAIL'

export const TASK_BY_USER = 'TASK_BY_USER'

export const COMPLETE_USER_TASK = 'COMPLETE_USER_TASK'

export const OPEN_NOTIFICATION = 'OPEN_NOTIFICATION'
export const CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION'

export type Severity = 'error' | 'success' | 'info' | 'warning' | undefined

export interface UserListLoading {
    type: typeof USER_LIST_LOADING
}

export interface UserListSuccess {
    type: typeof USER_LIST_SUCCESS
    payload: UserList[]
}

export interface UserListFail {
    type: typeof USER_LIST_FAIL
}

export interface TasksListLoading {
    type: typeof TASKS_LIST_LOADING
}

export interface TasksListSuccess {
    type: typeof TASKS_LIST_SUCCESS
    payload: Tasks[]
}

export interface TasksListFail {
    type: typeof TASKS_LIST_FAIL
}

export interface TaskByUser {
    type: typeof TASK_BY_USER
    payload: number | string
}
export interface completeUserTaskAction {
    type: typeof COMPLETE_USER_TASK
    payload: {
        title: string
        id: number | string
    }
}

export interface ISnackbar {
    snackbarOpen: boolean
    snackbarType: Severity
    snackbarMessage: string
}

interface OpenSnackbar {
    type: typeof OPEN_NOTIFICATION
    payload: ISnackbar
}
interface CloseSnackbar {
    type: typeof CLOSE_NOTIFICATION
    payload: ISnackbar
}

export type SnackbarActionsTypes = OpenSnackbar | CloseSnackbar | any

export type UserListDispatchTypes = UserListLoading | UserListSuccess | UserListFail
export type TasksListDispatchTypes =
    | TasksListLoading
    | TasksListSuccess
    | TasksListFail
    | TaskByUser
    | completeUserTaskAction
