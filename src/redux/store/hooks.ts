//import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
//import generateStore from './'

//const store = generateStore()
//export type RootState = ReturnType<typeof store.getState>
//export type AppDispatch = typeof store.dispatch

//export const useAppDispatch = () => useDispatch<AppDispatch>()
//export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './index'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
