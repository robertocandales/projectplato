import { UserList } from '../../config/DTOs/usersTypes'
import {
    USER_LIST_LOADING,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    UserListDispatchTypes,
} from '../types'

interface IinitialState {
    users: UserList[]
    isloading: boolean
    error: boolean
}

const initialState: IinitialState = {
    users: [],
    isloading: false,
    error: false,
}
const userReducer = (
    state: IinitialState = initialState,
    action: UserListDispatchTypes
): IinitialState => {
    switch (action.type) {
        case USER_LIST_LOADING:
            return { ...state, isloading: true, error: false }
        case USER_LIST_SUCCESS:
            return { ...state, users: action.payload, isloading: false, error: false }
        case USER_LIST_FAIL:
            return { ...state, isloading: false, error: true }

        default:
            return state
    }
}

export default userReducer
