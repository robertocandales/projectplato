/* eslint-disable import/no-named-as-default */
import { combineReducers } from '@reduxjs/toolkit'
import snackbarSlice from 'redux/slices/snackbarSlice'
import tasksSlice from 'redux/slices/tasksSlice'
import userSlice from 'redux/slices/userSlice'

export const rootReducer = combineReducers({
    userSlice,
    tasksSlice,
    snackbarSlice,
})
