import thunk from 'redux-thunk'
import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-named-as-default
import userSlice from 'redux/userSlice'
// eslint-disable-next-line import/no-named-as-default
import tasksSlice from 'redux/tasksSlice'
// eslint-disable-next-line import/no-named-as-default
import snackbarSlice from './snackbarSlice'

const reducer = combineReducers({
    userSlice,
    tasksSlice,
    snackbarSlice,
})

export const store = configureStore({
    reducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
