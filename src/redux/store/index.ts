import thunk from 'redux-thunk'
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import { rootReducer } from 'redux/reducers/rootReducer'

export const store = configureStore({
    reducer: rootReducer,
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
