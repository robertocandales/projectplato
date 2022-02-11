import {
    UserListDispatchTypes,
    USER_LIST_LOADING,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
} from '../types'
import { Dispatch } from 'redux'

import UserService from '../../config/services/UserServices'
import { UserList } from '../../config/DTOs/usersTypes'

export const userAction = () => async (dispatch: Dispatch<UserListDispatchTypes>) => {
    try {
        dispatch({
            type: USER_LIST_LOADING,
        })
        const res: UserList[] = await UserService.getUsers()
        dispatch({
            type: USER_LIST_SUCCESS,
            payload: res,
        })
    } catch (e) {
        dispatch({
            type: USER_LIST_FAIL,
        })
    }
}
