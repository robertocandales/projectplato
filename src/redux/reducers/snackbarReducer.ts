import { OPEN_NOTIFICATION, CLOSE_NOTIFICATION, SnackbarActionsTypes, Severity } from '../types'

interface IinitialState {
    snackbarOpen: boolean
    snackbarType: Severity
    snackbarMessage: string
}

const initialState: IinitialState = {
    snackbarOpen: false,
    snackbarType: 'success',
    snackbarMessage: '',
}

const snackbarReducer = (state = initialState, action: SnackbarActionsTypes): IinitialState => {
    switch (action.type) {
        case OPEN_NOTIFICATION:
            return {
                ...state,
                ...action.payload,
            }
        case CLOSE_NOTIFICATION:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export default snackbarReducer
