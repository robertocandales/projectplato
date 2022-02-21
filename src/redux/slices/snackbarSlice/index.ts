import { createSlice } from '@reduxjs/toolkit'
import { Severity } from 'config/DTOs/snackbarTypes'

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

export const snackbarSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        snackbarOpenAction: (state, action) => {
            return {
                ...state,
                ...action.payload,
            }
        },
        snackbarCloseAction: (state, action) => {
            return {
                ...state,
                ...action.payload,
            }
        },
    },
})
export const { snackbarOpenAction, snackbarCloseAction } = snackbarSlice.actions
export default snackbarSlice.reducer
